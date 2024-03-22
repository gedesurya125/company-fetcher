export const wooCommerceFetch = async (endPoints = "", queryParams = {}) => {
  const queryParamsKeys = Object.keys(queryParams);
  const hasQueryParams = queryParamsKeys?.length > 0;

  const stringifyQueryParams = (second) => {
    return queryParamsKeys.map((key) => `${key}=${queryParams[key]}`).join("&");
  };

  const externalQueryParams = hasQueryParams
    ? `&${stringifyQueryParams(queryParams)}`
    : "";

  const apiUrl = `${process.env.NEXT_PUBLIC_AMBRATEC_API_BASE_URL}${endPoints}?consumer_key=${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET}${externalQueryParams}`;
  return await fetch(apiUrl, { cache: "no-store" });
};
