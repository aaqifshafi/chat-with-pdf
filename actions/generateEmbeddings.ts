"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";

export async function generateEmbeddings(docId: string) {
  auth().protect(); // Protect this route with Clerk

  //   Turn the PDF into embeddings binary data eg [0.42342,07575474]
  await generateEmbeddingsInPineconeVectorStore(docId);
  revalidatePath("/dashboard");

  return { completed: true };
}
