export const getFullName = (first_name?: string, last_name?: string): string => {
  if (first_name && last_name) {
    return `${first_name} ${last_name}`;
  }
  return last_name || first_name || '';
};
