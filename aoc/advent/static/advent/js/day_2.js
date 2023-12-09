function checkGame(line) {
  let ind = line.indexOf(':');
  let rest = line.substring(ind + 2, line.length);
  for (subset of rest.split("; ")) {
    for (element of subset.split(", ")) {
      let split = element.split(' ');
      let n = parseInt(split[0]);
      let colour = split[1];
      if ((colour == "green" && n > 13) | (colour == "red" && n > 12) | (colour == "blue" && n > 14)) {
        return 0;
      }
    }
  }
  return parseInt(line.substring(5, ind));
}

function updateMin(colour, col, n, minCol) {
   if (colour == col && n > minCol) {
     return n;
   }
   return minCol;
}

function power(line) {
  let rest = line.substring(line.indexOf(':') + 2, line.length);
  let minRed = 0, minGreen = 0, minBlue = 0;
    for (subset of rest.split("; ")) {
      for (element of subset.split(", ")) {
        let split = element.split(' ');
        let n = parseInt(split[0]);
        let colour = split[1];
        minRed = updateMin(colour, "red", n, minRed);
        minBlue = updateMin(colour, "blue", n, minBlue);
        minGreen = updateMin(colour, "green", n, minGreen);
      }
  }
  return minBlue * minRed * minGreen;
}

function part1() {
    let data = document.getElementById("input").value.split('\n');
    document.getElementById("part-1-answer").textContent = data.reduce((acc, cur) => acc + checkGame(cur));
}

function part2() {
    let data = document.getElementById("input").value.split('\n');
    document.getElementById("part-2-answer").textContent = data.reduce((acc, cur) => acc + power(cur));
}