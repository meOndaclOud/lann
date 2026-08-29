import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

let hasWarnedUnconfigured = false;

/**
 * Refreshes the Supabase auth session cookie on every request so Server
 * Components always see a valid session. Required plumbing for Supabase
 * SSR auth — see https://supabase.com/docs/guides/auth/server-side/nextjs.
 *
 * No page depends on Supabase yet (auth is a later phase), so when it isn't
 * configured this skips session refresh instead of blocking every request.
 */
export async function updateSession(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (!hasWarnedUnconfigured) {
      console.warn("Supabase env vars are not set — skipping session refresh. See .env.example.");
      hasWarnedUnconfigured = true;
    }
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  await supabase.auth.getUser();

  return supabaseResponse;
}
