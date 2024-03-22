export const getFormattedDate = (isoString) =>
  new Date(isoString).toLocaleDateString("en-GB");
