import { gerRandomNumber } from "~/utils/random-number";
const colors = ["orange", "blue", "violet", "pink"];

export const getRandomColor = () => {
  return colors[gerRandomNumber(-1, 3)];
};
