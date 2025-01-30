export const filterEmptyFormData = (data: any) => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== "")
  );
};
