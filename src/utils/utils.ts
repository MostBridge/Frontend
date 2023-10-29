export const getFullName = (first_name?: string, last_name?: string): string => {
  if (first_name && last_name) {
    return `${first_name} ${last_name}`;
  }
  return last_name || first_name || '';
};

export const getCandidatesDeclension = (value: number) => {
  const words = ['кандидат', 'кандидата', 'кандидатов'];
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};
