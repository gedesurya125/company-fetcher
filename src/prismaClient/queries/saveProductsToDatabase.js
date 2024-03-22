"use server";
import { runQuery } from "./runQuery";

export const saveProductsToDatabase = (products = []) => {
  return runQuery(async (prisma) => {
    const response = await prisma.products.createMany({
      data: products,
      skipDuplicates: true,
    });
    return response;
  });
};
