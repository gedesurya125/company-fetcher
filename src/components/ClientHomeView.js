"use client";
import React from "react";
import { StartFetchButton } from "./StartFetchButton";
import sampleCompanyListData from "../data/painter-ids-sample.json";
import allCompanyListData from "../data/painter-ids.json";
import {
  getCompanyDetailData,
  getListOfCompanyDetailData,
} from "@/api/farbeApi";

// utils
const splitArrayIntoChuckByGivenSize = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const ClientHomeView = () => {
  const [loading, setLoading] = React.useState(false);
  const [csvUrl, setCsvUrl] = React.useState("/");

  const DELAY = 400;

  const delayedFetchListOfCompany = async ({ painterIds }) =>
    new Promise((resolve) => setTimeout(resolve, DELAY)).then(async () => {
      const companyDetailList = await getListOfCompanyDetailData({
        painterIds,
      });
      return companyDetailList;
    });

  const handleStartFetchingListOfCompany = async () => {
    setLoading(true);

    const pointerIds = allCompanyListData.map((data) => data.uid);

    const chunkedPointerIds = splitArrayIntoChuckByGivenSize(pointerIds, 100);

    console.log("this is the chinked pointer ids", chunkedPointerIds);

    //// const allCompanyData = await getListOfCompanyDetailData({ pointerIds });

    const allCompanyData = [];

    for (let i = 0; i < chunkedPointerIds.length; i++) {
      const companyDetailList = await delayedFetchListOfCompany({
        painterIds: chunkedPointerIds[i]?.join(","),
      });

      console.log("this is companyDetailList", companyDetailList);
      if (companyDetailList.length > 0) {
        allCompanyData.push(...companyDetailList);
      }
    }

    console.log("this is the allCompanydata", allCompanyData);

    const csvData = [];

    const csvTitleRow = Object?.keys(allCompanyData[0]);

    csvData.push(csvTitleRow);

    allCompanyData.forEach((data) => {
      csvData.push(Object.values(data));
    });

    let csvContent = "";

    csvData.forEach((row) => {
      csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
    const csvObUrl = URL.createObjectURL(blob);

    setCsvUrl(csvObUrl);

    setLoading(false);
  };

  //? Fetching the data one by one
  // const DELAY = 2000;

  // const delayedFetch = async ({ painterId }) =>
  //   new Promise((resolve) => setTimeout(resolve, DELAY)).then(async () => {
  //     const companyDetail = await getCompanyDetailData({
  //       painterId,
  //     });
  //     return companyDetail;
  //   });

  // const handleStartFetching = async () => {
  //   setLoading(true);

  //   const allCompanyData = [];

  //   for (let i = 0; i < allCompanyListData.length; i++) {
  //     // const companyDetail = await getCompanyDetailData({
  //     //   painterId: allCompanyListData[i].uid,
  //     // });

  //     const companyDetail = await delayedFetch({
  //       painterId: allCompanyListData[i]?.uid,
  //     });

  //     console.log("companyDetail response", companyDetail);

  //     if (companyDetail) {
  //       allCompanyData.push(companyDetail[0]);
  //     }
  //   }

  //   const csvData = [];

  //   const csvTitleRow = Object?.keys(allCompanyData[0]);

  //   csvData.push(csvTitleRow);

  //   allCompanyData.forEach((data) => {
  //     csvData.push(Object.values(data));
  //   });

  //   let csvContent = "";

  //   csvData.forEach((row) => {
  //     csvContent += row.join(",") + "\n";
  //   });

  //   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
  //   const csvObUrl = URL.createObjectURL(blob);

  //   setCsvUrl(csvObUrl);

  //   setLoading(false);
  // };

  return (
    <div className="flex flex-col">
      <StartFetchButton
        loading={loading}
        onClick={handleStartFetchingListOfCompany}
      />
      {csvUrl !== "/" && (
        <a download="File.csv" href={csvUrl} className="mt-10">
          Download CSV File
        </a>
      )}
    </div>
  );
};
