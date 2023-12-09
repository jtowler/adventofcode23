function getAdjacent(symbols, data) {
  let nums = [];
  for (symbol of symbols) {
    for (i of [-1, 0, 1]) {
      for (j of [-1, 0, 1]) {
        if (!isNaN(data[symbol.i + i][symbol.j + j])) {
          nums.push({"i": symbol.i + i, "j": symbol.j + j})
        }
      }
    }
  }
  return nums;
}

function getStarAdjacent(star, data) {
  let adjs = [];
  for (i of [-1, 0, 1]) {
    for (j of [-1, 0, 1])
      if (!isNaN(data[star.i + i][star.j + j])) {
        adjs.push({"i": star.i + i, "j": star.j + j})
      }
    }
    let nums = adjs.map((x) => getNum(x, data));
    let coords = [], t = [];
    for (num of nums) {
       coord = num.i + "," + num.j;
       if (!coords.includes(coord)) {
         coords.push(coord);
         t.push(num.value);
       }
    }
    return t.length == 2 ? t[0] * t[1] : 0;
}

function getNum(symbol, data) {
  let line = data[symbol.i];
  let j = symbol.j;
  while (!isNaN(line[j])) {
    j--;
  }
  let minJ = j + 1;
  j = symbol.j;
  while (!isNaN(line[j])) {
    j++;
  }
  let value = Number(line.substring(minJ, j));
  return {"i": symbol.i, "j": minJ, "value": value}
}

function part1() {
    let data = document.getElementById("input").value.split('\n');
    let symbols = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (isNaN( data[i][j]) && data[i][j] != '.') {
          symbols.push({"i": i, "j": j});
        }
      }
    }
    let adjs = getAdjacent(symbols, data);
    let nums = adjs.map((x) => getNum(x, data));

    let coords = [], t = 0;
    for (num of nums) {
       coord = num.i + "," + num.j;
       if (!coords.includes(coord)) {
         coords.push(coord);
         t += num.value;
       }
    }

    document.getElementById("part-1-answer").textContent = t;
}

function part2() {
    let data = document.getElementById("input").value.split('\n');
    let stars = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == '*') {
          stars.push({"i": i, "j": j});
        }
      }
    }
    document.getElementById("part-2-answer").textContent = stars.reduce((acc, cur) => acc + getStarAdjacent(cur, data), 0);
}