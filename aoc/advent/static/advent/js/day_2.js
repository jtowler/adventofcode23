function checkGame(line) {
  var ind = line.indexOf(':');
  var rest = line.substring(ind + 2, line.length);
  for (subset of rest.split("; ")) {
    for (element of subset.split(", ")) {
      var split = element.split(' ');
      var n = parseInt(split[0]);
      var colour = split[1];
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
   return minCol
}

function power(line) {
  var ind = line.indexOf(':');
  var rest = line.substring(ind + 2, line.length);
  var minRed = 0, minGreen = 0, minBlue = 0;
    for (subset of rest.split("; ")) {
      for (element of subset.split(", ")) {
        var split = element.split(' ');
        var n = parseInt(split[0]);
        var colour = split[1];
        minRed = updateMin(colour, "red", n, minRed);
        minBlue = updateMin(colour, "blue", n, minBlue);
        minGreen = updateMin(colour, "green", n, minGreen);
      }
  }
  return minBlue * minRed * minGreen;
}


function part1() {
    var data = document.getElementById("input").value.split('\n');
    var t = 0;
    for (line of data) {
      t += checkGame(line);
    }
    document.getElementById("part-1-answer").textContent = t;
}

function part2() {
    var data = document.getElementById("input").value.split('\n');
    var t = 0;
    for (line of data) {
      t += power(line);
    }
    document.getElementById("part-2-answer").textContent = t;
}