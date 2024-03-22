"use server";
import { getPatients } from "./getPatients";

export const getPaginatedPatients = async (
  findManyProps = {
    take: 10,
    lastItemId: null,
    where: undefined,
  }
) => {
  return await getPatients({
    take: findManyProps?.take || 10,
    // ? order the items by id ascending
    orderBy: {
      id: "asc",
    },
    //?  if last item id is provided, start take after the last item id
    ...(findManyProps?.lastItemId && {
      skip: 1,
      cursor: {
        id: findManyProps?.lastItemId,
      },
    }),
    // ? filter the result if provided
    ...(findManyProps?.where && { where: findManyProps?.where }),
  });
};
