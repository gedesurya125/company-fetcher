"use server";

import { runQuery } from "./runQuery";

export const getAllProductsFromDatabase = () => {
  return runQuery(async (prisma) => {
    const response = await prisma.products.findMany();
    return response;
  });
};
