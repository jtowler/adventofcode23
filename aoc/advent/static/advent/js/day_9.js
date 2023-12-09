function pred(h) {
  let iters = [h];
  while (getNUnique(h)) {
    h = h.slice(1).map((a, i) => a - h[i]);
    iters.push(h);
  }
  iters = iters.toReversed();

  let start = iters[0][0];
  for (it of iters.slice(1)) {
    start = it[it.length - 1] + start;
  }
  return start;
}

function getNUnique(h) {
  let s = new Set(h);
  return s.size > 1
}

function predNeg(h) {
  let iters = [h];
  while (getNUnique(h)) {
    h = h.slice(1).map((a, i) => a - h[i]);
    iters.push(h);
  }
  iters = iters.toReversed();
  let start = iters[0][0];
  for (it of iters.slice(1)) {
    start = it[0] - start;
  }
  return start;
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let hists = data.map((line) => line.split(" ").map((x) => Number(x)));

  let m = hists.map(pred);
  let s = m.reduce((a,b) => a+b)

  document.getElementById("part-1-answer").textContent = s;
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let hists = data.map((line) => line.split(" ").map((x) => Number(x)));

  let m = hists.map(predNeg);
  let s = m.reduce((a,b) => a+b)

  document.getElementById("part-2-answer").textContent = s;
}
