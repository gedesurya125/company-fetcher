import { runQuery } from "./runQuery";

export const getPatients = async (findManyProps) => {
  return runQuery(async (prisma) => {
    const patients = await prisma.patient.findMany(findManyProps);
    return patients;
  });
};
