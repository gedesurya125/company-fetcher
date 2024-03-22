"use server";
const { wooCommerceFetch } = require("./wooCoomerceFetch");

export const getAllProductData = async (
  queryParams = {
    per_page: 100, //max value
    offset: 0,
    orderby: "id",
    order: "asc",
  }
) => {
  const defaultQueryParamsValue = {
    per_page: queryParams?.per_page || 100, //max value
    offset: queryParams?.offset || 0,
    orderby: queryParams?.orderby || "id",
    order: queryParams?.order || "asc",
  };

  const data = await wooCommerceFetch("/products", defaultQueryParamsValue);
  return await data?.json();
};
