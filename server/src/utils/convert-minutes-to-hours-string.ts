export function convertMinutesToHoursString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  // pegando o resto da divisão
  const minutes = minutesAmount % 60;

  // o padStart vai adicionar 0 na frente no número de horas caso o número de
  // horas não tenha 2 caracteres
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};