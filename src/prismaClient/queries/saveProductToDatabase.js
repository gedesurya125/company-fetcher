"use server";
import { runQuery } from "./runQuery";

export const saveProductToDatabase = (product) => {
  return runQuery(async (prisma) => {
    const response = await prisma.products.create({
      data: product,
      include: {
        images: true,
      },
    });
    return response;
  });
};
