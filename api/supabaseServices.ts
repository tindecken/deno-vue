import { createClient } from "https://esm.sh/@supabase/supabase-js";

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "tindecken_todo" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  "https://tuozygdpgeoyogkkplvq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1b3p5Z2RwZ2VveW9na2twbHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4ODEwMjksImV4cCI6MjAwMjQ1NzAyOX0.umXI-zFV_lwJj6QVuztpP7gO6ut6sglROijEOmVDh0U",
  options
);

const { data, error } = await supabase
  .from('users')
  .select()

console.log('data', data)
console.log('error', error)