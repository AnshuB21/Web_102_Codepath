import { createClient } from "@supabase/supabase-js";
const URL = "https://oerqffaemyokxabtpyxf.supabase.co";
const API_KEY =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcnFmZmFlbXlva3hhYnRweXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTk1NTIsImV4cCI6MjA2MDU5NTU1Mn0.08_I32_Fh6Rrb8Ql_YcvyRrCVJK19ugeJWRm9woAD0U";
export const supabase = createClient(URL, API_KEY);
