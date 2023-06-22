export function gerRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
