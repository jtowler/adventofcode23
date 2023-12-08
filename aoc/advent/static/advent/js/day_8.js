function getNode(nodes, n) {
  for (node of nodes) {
    if (node.name == n) {
      return node;
    }
  }
}

function getCycle(nodes, lr, curr) {
  let t = 0;
  while (curr[curr.length - 1] != 'Z') {
    let ind = t % lr.length;
    let n = getNode(nodes, curr);
    if (lr[ind] == "L") {
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

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let instructions = data[0];
  let nodes = [];
  for (line of data.slice(2)) {
    let st = line.split(' = ');
    let st2 = st[1].split(', ');
    nodes.push({"name": st[0], "l": st2[0].slice(1), "r": st2[1].slice(0, -1)});
  }
  let t = getCycle(nodes, instructions, "AAA");
  document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let instructions = data[0];
  let nodes = [];
  for (line of data.slice(2)) {
    let st = line.split(' = ');
    let st2 = st[1].split(', ');
    nodes.push({"name": st[0], "l": st2[0].slice(1), "r": st2[1].slice(0, -1)});
  }
  let sNodes = [];
  for (node of nodes) {
    if (node.name[node.name.length-1] == 'A') {
      sNodes.push(node);
    }
  }
  let cycles = sNodes.map((x) => getCycle(nodes, instructions, x.name));
  document.getElementById("part-2-answer").textContent = lcm(cycles);
}
