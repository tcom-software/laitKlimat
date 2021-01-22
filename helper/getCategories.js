import getConfig from "next/config";

const {
  serverRuntimeConfig: { projectId, fetchUrl, categoryPath },
} = getConfig();

export const getCategories = async () => {
  const response = await fetch(`${fetchUrl}${categoryPath}`, {
    method: "GET",
    headers: {
      projectId,
    },
  });
  const categories = await response.json();
  return categories;
};
