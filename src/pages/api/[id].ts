// // 詳細ペーじAPI(pageルーターの時の書き方)
// import { supabase } from "@/utils/supabaseClient";
// import { NextApiRequest, NextApiResponse } from "next";
// import { notFound } from "next/navigation";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id } = req.query;

//   switch (req.method) {
//     case "GET":
//       const { data, error } = await supabase
//         .from("posts")
//         .select("*")
//         .eq("id", id)
//         .single();

//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }

//       if (!data) {
//         notFound();
//       }

//       return res.status(200).json(data);

//     case "PUT":
//       // const { title, content } = req.body;

//       // const { data: updateData, error: updateError } = await supabase
//       // 	.from("posts")
//       // 	.update({ title, content })
//       // 	.eq("id", id);

//       // if (updateError) {
//       // 	return res.status(500).json({ error: updateError.message });
//       // }

//       // return res.status(200).json(updateData);
//       break;

//     case "DELETE":
//       const { error: deleteError } = await supabase
//         .from("posts")
//         .delete()
//         .eq("id", id);

//       if (deleteError) {
//         return res.status(500).json({ error: deleteError.message });
//       }

//       return res.status(200).json({ message: "削除しました" });
//   }
// }
