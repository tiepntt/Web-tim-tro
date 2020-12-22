import API from "../..";
const baseUrl = "/hint";
const getHint = (input: { key: string; take: number }) => {
  return API.get(baseUrl, { params: input });
};
export const HintApi = { getHint };
