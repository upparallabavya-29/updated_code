import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Force Mock mode if keys are missing or project is dead
export const IS_MOCK_ENV = !supabaseUrl || !supabaseAnonKey || supabaseUrl.includes("placeholder") || true;

if (!supabaseUrl || !supabaseAnonKey) {
    if (!IS_MOCK_ENV) {
        console.warn("Supabase URL or Anon Key is missing. Check your .env file.");
    }
}

export const supabase = createClient(
    supabaseUrl || "https://placeholder-url.supabase.co",
    supabaseAnonKey || "placeholder-key"
);
