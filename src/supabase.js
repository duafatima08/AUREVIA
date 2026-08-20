import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const myApiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const myDatabase = createClient(
  supabaseURL,
  myApiKey
);