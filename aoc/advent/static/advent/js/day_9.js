function pred(h) {
  let iters = [h];
  while (new Set(h).size > 1){
    h = h.slice(1).map((a, i) => a - h[i]);
    iters.push(h);
  }
  iters = iters.toReversed();
  return iters.slice(1).reduce((a, c) => c[c.length - 1] + a, iters[0][0]);
}

function predNeg(h) {
  let iters = [h];
  while (new Set(h).size > 1) {
    h = h.slice(1).map((a, i) => a - h[i]);
    iters.push(h);
  }
  iters = iters.toReversed();
  return iters.slice(1).reduce((a, c) => c[0] - a, iters[0][0]);
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let hists = data.map((line) => line.split(" ").map(Number));
  document.getElementById("part-1-answer").textContent = hists.map(pred).reduce((a,b) => a+b);
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let hists = data.map((line) => line.split(" ").map(Number));
  document.getElementById("part-2-answer").textContent = hists.map(predNeg).reduce((a,b) => a+b);
}
