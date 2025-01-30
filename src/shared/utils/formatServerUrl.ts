export const formatServerUrl = (url: string) => {
  return import.meta.env.VITE_APP_BASE_FILE_URL + url;
};
