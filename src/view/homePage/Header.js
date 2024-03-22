import { ResponsiveGrid } from "components/theme";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";
import { getPatients } from "prismaClient/queries/getPatients";
import React from "react";

export const Header = async () => {
  // const patients = await getPatients();
  // const paginatedPatients = await getPaginatedPatients();
  return (
    <ResponsiveGrid>
      <Headline />
    </ResponsiveGrid>
  );
};

const Headline = () => {
  return (
    <h1 className="text-primary col-start-1 col-end-13 mt-10 text-md flex justify-center">
      Welcome to the App
    </h1>
  );
};
