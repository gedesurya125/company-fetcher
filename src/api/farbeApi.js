"use server";
const eID = "gmap";
const jwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbCIsImlhdCI6MTcxMTA3ODI0NCwiZXhwIjoxNzExMDg1NDQ0LCJzdWIiOiIxMTg2NjYifQ.166ptogm0UHlAwksY15crjcz2vfCjxR6sX5UiirL650";
const mode = "detail";

const getDetailAPi = `https://www.farbe.de/index.php?eID=${eID}&jwt=${jwt}&mode=${mode}`;

export const getCompanyDetailData = async ({ painterId }) => {
  const formData = new URLSearchParams();

  formData.append("value", painterId);

  const data = await fetch(getDetailAPi, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "*/*",
    },
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("error fetching the data", err);
      return err;
    });

  console.log("this is the data", data);
  return data;
};

export const getListOfCompanyDetailData = async ({ painterIds }) => {
  const getDetailListAPI = `https://www.farbe.de/index.php?eID=${eID}&jwt=${jwt}&mode=list`;

  const formData = new URLSearchParams();

  formData.append("value", painterIds);

  const data = await fetch(getDetailListAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "*/*",
    },
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("error fetching the data", err);
      return err;
    });

  console.log("this is the data", data);
  return data;
};
