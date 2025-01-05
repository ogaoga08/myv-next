// import { Article } from "./types";
// import { notFound } from "next/navigation";

// // 全データ取得API
// export const getAllArticles = async (): Promise<Article[]> => {
//   // SSRを使う(no-store)・force-cacheはSSGを使う場合に使う
//   // {next: {revalidate: 60}}はISRを使う場合に使う
//   const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });

//   // エラーハンドリング
//   if (!res.ok) {
//     throw new Error("Error");
//   }

//   // ローディングを入れる
//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   // resはオブジェクトなので、JSON形式にシリアライズ(文字列化)する
//   const articles = await res.json();
//   return articles;
// };

// // 詳細データ取得API
// export const getDetailArticle = async (id: number): Promise<Article> => {
//   const res = await fetch(`http://localhost:3001/posts/${id}`, {
//     next: { revalidate: 60 },
//   }); //そんなに変更されないのでISR(60秒間隔)

//   if (res.status === 404) {
//     notFound();
//   }

//   if (!res.ok) {
//     throw new Error("Error");
//   }

//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   const article = await res.json();
//   return article;
// };

// // 記事作成API
// export const createArticle = async (
//   title: string,
//   content: string
// ): Promise<Article> => {
//   const currentDatetime = new Date().toISOString();

//   const res = await fetch(`http://localhost:3001/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title, content, createdAt: currentDatetime }),
//   }); //POSTメソッド

//   if (!res.ok) {
//     throw new Error("Error");
//   }

//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   const newArticle = await res.json();
//   return newArticle;
// };

// // 削除API
// export const deleteArticle = async (id: number): Promise<Article> => {
//   const res = await fetch(`http://localhost:3001/posts/${id}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Error");
//   }

//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   const deleteArticle = await res.json();
//   return deleteArticle;
// };
