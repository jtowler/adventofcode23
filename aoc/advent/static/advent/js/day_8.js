function getCycle(nodes, lr, curr) {
  let t = 0;
  while (curr[curr.length - 1] != 'Z') {
    let n = nodes.find((node) => node.name == curr);
    if (lr[t % lr.length] == "L") {
      curr = n.l;
    } else {
      curr = n.r;
    }
    t++;
  }
  return t;
}


function lcm(nums) {
  let result = 1;
  for (num of nums) {
    let a = result, b = num;
    while (b > 0) {
      let c = b;
      b = a % b;
      a = c;
    }
    result = num / a * result;
  }
  return result;
}

function createNode(line) {
    let st = line.split(' = ');
    let st2 = st[1].split(', ');
    return {"name": st[0], "l": st2[0].slice(1), "r": st2[1].slice(0, -1)};
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let nodes = data.slice(2).map(createNode);
  let t = getCycle(nodes, data[0], "AAA");
  document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let nodes = data.slice(2).map(createNode);
  let sNodes = nodes.filter((node) => node.name[node.name.length - 1] == 'A');
  let cycles = sNodes.map((x) => getCycle(nodes, data[0], x.name));
  document.getElementById("part-2-answer").textContent = lcm(cycles);
}
