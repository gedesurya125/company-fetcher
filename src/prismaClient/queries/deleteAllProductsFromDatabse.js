"use server";

import { runQuery } from "./runQuery";

export const deleteAllProductsFromDatabase = () => {
  return runQuery(async (prisma) => {
    const response = await prisma.products.deleteMany();
    return response;
  });
};
