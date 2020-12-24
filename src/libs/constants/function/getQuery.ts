export const getQuery = (url: string) => {
  if (!url) return undefined;
  let location = JSON.parse(
    '{"' +
      decodeURI(url)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return location !== {} ? location : undefined;
};
export const setQuery = (input: any) => {
  return "?" + new URLSearchParams(input).toString();
};
export const changeString = (str: string) => {
  if (!str) return "";
  return str.replaceAll("%2C", ",").replaceAll("+", " ");
};
