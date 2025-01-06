// DB全件取得API
import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const { data, error } = await supabase.from("Post").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  // bodyから取ってこれないので、req.json()を使う
  const { name, title, content } = await req.json();

  const { data, error } = await supabase
    .from("Post")
    .insert([{ name, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}
