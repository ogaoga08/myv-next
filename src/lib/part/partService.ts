import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchMeatParts() {
  const { data, error } = await supabase
    .from("MeatPart")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("Error fetching MeatParts:", error);
    return [];
  }

  return data;
}
