"use client";
import { saveProductsToDatabase } from "prismaClient/queries/saveProductsToDatabase";
import React from "react";
import { getAllProductData } from "wooCommeceAPIs/getAllProductData";
import { PrimaryButton } from "./PrimaryButton";
import { getAllProductsFromDatabase } from "prismaClient/queries/getAllProductsFromDatabase";
import { deleteAllProductsFromDatabase } from "prismaClient/queries/deleteAllProductsFromDatabse";
import { saveProductToDatabase } from "prismaClient/queries/saveProductToDatabase";

const PER_PAGE = 100;

// TODO: rename thsi primary button
export const FetchAndSaveProductsButton = () => {
  const [loading, setLoading] = React.useState(false);

  const handleFetchProductAndSaveToDataBase = async () => {
    setLoading(true);

    let allProducts = [];
    let isNoMoreData = false;
    let offset = 0;

    do {
      const newProducts = await getAllProductData({
        per_page: PER_PAGE,
        offset,
      });

      allProducts.push(newProducts || []);
      offset += PER_PAGE;

      if (newProducts?.length < PER_PAGE) {
        isNoMoreData = true;
      }
    } while (!isNoMoreData);

    const allNewProducts = allProducts?.flat();

    // const products = await getAllProductData();
    console.log("this is the products", allNewProducts);

    const createProductsPromise = allNewProducts?.map(async (data) => {
      const images =
        data?.images?.length > 0
          ? data?.images.map((image) => ({
              src: image?.src,
              alt: image?.alt,
              name: image?.name,
            }))
          : [];

      const response = await saveProductToDatabase({
        name: data?.name,
        images: {
          create: images,
        },
      });
      console.log("product created", response);
      return response;
    });

    const responseList = await Promise.all(createProductsPromise);
    console.log("all response of product creation", responseList);
    setLoading(false);
  };

  return (
    <PrimaryButton
      disabled={loading}
      onClick={handleFetchProductAndSaveToDataBase}
    >
      {loading ? "Loading..." : "Fetch and save products"}
    </PrimaryButton>
  );
};

export const GetAllProductFromDatabaseButton = () => {
  const handleClick = async () => {
    const response = await getAllProductsFromDatabase();

    console.log("all products from database", response);
  };

  return (
    <PrimaryButton onClick={handleClick}>
      Get Products From Database
    </PrimaryButton>
  );
};

export const DeleteAllProductsFromDatabaseButton = () => {
  const handleClick = async () => {
    const response = await deleteAllProductsFromDatabase();
    console.log("all products is deleted from database", response);
  };

  return (
    <PrimaryButton onClick={handleClick}>
      Delete all Products from Database
    </PrimaryButton>
  );
};
