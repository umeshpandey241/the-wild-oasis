import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hkodtxnghweyetngznpo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhrb2R0eG5naHdleWV0bmd6bnBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5ODYzNjAsImV4cCI6MjA0MjU2MjM2MH0.vD6lSuLv9-V4b1CM4MWIt9MkTXplYhPA9DK5QIqqNBo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
