export function convertMinutesToHoursString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  // pegando o resto da divisão
  const minutes = minutesAmount % 60;

  return `${hours}:${minutes}`;
};