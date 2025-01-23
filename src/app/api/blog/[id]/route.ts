// DB1件取得API
import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  // URLのエンドポイントを一部取得
  const name = req.url.split("/blog/")[1];

  const { data, error } = await supabase
    .from("MeatPart")
    .select("*")
    .eq("engName", name)
    .single();

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

// export async function DELETE(req: Request, res: NextApiResponse) {
//   // URLのエンドポイントを一部取得
//   const id = req.url.split("/blog/")[1];

//   const { error: deleteError } = await supabase
//     .from("posts")
//     .delete()
//     .eq("id", id);

//   if (deleteError) {
//     return NextResponse.json(deleteError);
//   }

//   return NextResponse.json({ status: 200 });
// }
