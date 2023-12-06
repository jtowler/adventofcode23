function countWins(line, updateT) {
  let split = line.split(" | ");
  let nums = split[0].split(" ");
  let wins = split[1].split(" ");
  let t = 0;
  for (n of nums) {
    if (wins.includes(n) && n != "" && n!= " ") {
      t = updateT(t);
    }
  }
  return t;
}

function incT(t) {
  return t + 1
}

function doubleT(t) {
  if (t == 0) {
    return 1;
  } else {
    return t * 2;
  }
}


function getCopies(cards, ks, vs) {
  let r = [];
  for (card of cards) {
    let v = vs[ks.indexOf(card)];
    for (let i = 1; i <= v; i++) {
      r.push(card + i)
    }
  }
  return r;
}

function getNumber(l) {
    let s = l.split(" ");
    return Number(s[s.length - 1])
}

function part1() {
    let data = document.getElementById("input").value.split('\n');
    let t = 0;
    for (line of data) {
      let x = countWins(line.split(": ")[1], doubleT);
      t += x;
    }
    document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  var data = document.getElementById("input").value.split('\n');
  let ks = [], vs = [];
  for (line of data) {
    let split = line.split(": ");
    ks.push(getNumber(split[0]));
    let x = countWins(split[1], incT);
    vs.push(x);
  }
  let t = ks.length;
  let newCards = getCopies(ks, ks, vs);
  while (newCards.length > 0) {
    t += newCards.length;
    newCards = getCopies(newCards, ks, vs);
  }
  document.getElementById("part-2-answer").textContent = t;
}
