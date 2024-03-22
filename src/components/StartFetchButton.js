"use client";
import React from "react";
import { fetchCompanyDetail } from "../api/farbeApi";

export const StartFetchButton = ({ loading, ...props }) => {
  return (
    <button className="bg-blue-800 px-6 py-3 rounded-lg" {...props}>
      {loading ? "Loading..." : "Start The Fetch"}{" "}
    </button>
  );
};
