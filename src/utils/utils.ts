export const capitalizeFirstLetter = (str: string | undefined = ''): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFullName = (first_name: string, last_name: string): string => {
  return `${first_name} ${last_name}`;
};
