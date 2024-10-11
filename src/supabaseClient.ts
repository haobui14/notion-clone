import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

console.log(supabaseKey);
console.log(supabaseUrl);

if (!supabaseKey || !supabaseUrl) {
  throw new Error('missing supabase url or key');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
