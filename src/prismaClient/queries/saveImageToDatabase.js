"use server";
import { runQuery } from "./runQuery";
export const saveImageToDatabase = (image) => {
  return runQuery(async (prisma) => {
    const response = await prisma.image.create({
      data: image,
    });
    return response;
  });
};
