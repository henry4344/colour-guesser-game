export const getRandomColours = (): string[] => {
  // generate 3 random hex colours
  const randomColor = (): string =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return [randomColor(), randomColor(), randomColor()];
};
