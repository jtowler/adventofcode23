function race(t, d) {
  let n = 0;
  for (let h = 1; h < t; h++) {
    if ((t - h) * h > d) n++;
  }
  return n;
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let times = data[0].split(" ").slice(1).filter((l) => l != "").map(Number);
  let dists = data[1].split(" ").slice(1).filter((l) => l != "").map(Number);
  let p = 1;
  for (let i = 0; i < times.length; i++) {
    p *= race(times[i], dists[i])
  }

  document.getElementById("part-1-answer").textContent = p;
}

function part2() {
  var data = document.getElementById("input").value.split('\n');
  let time = "", dist = "";
  for (l of data[0].split(" ").slice(1)) {
    if (l != "") time += l;
  }
  for (l of data[1].split(" ").slice(1)) {
    if (l != "") dist += l;
  }

  let p = race(Number(time), Number(dist));

  document.getElementById("part-2-answer").textContent = p;
}
