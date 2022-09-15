export function convertHourStringToMinutes(hourString: string) {
  // o split vai converter o 18:00 -> ["18", "00"] -> o map Number vai pegar
  // cada posição do array e converter em número
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
};