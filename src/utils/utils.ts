export const capitalizeFirstLetter = (str: string | undefined = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
