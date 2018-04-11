let points = [90, 11, 22, 99, 111, 34];

let highScore = points.filter((n) =>
{
  return n < 34;
});

console.log(highScore);
