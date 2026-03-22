import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CardRecord {
  id: string;
  occasion: string;
  template_id: string;
  fields: Record<string, string>;
  sender_email: string;
  expires_at: string;
  created_at: string;
}