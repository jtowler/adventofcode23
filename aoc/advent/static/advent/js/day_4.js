function countWins(line, updateT) {
  let split = line.split(" | ");
  let nums = split[0].split(" ");
  let wins = split[1].split(" ");
  return nums.filter((n) => wins.includes(n) && n != "" && n!= " ").reduce((a, c) => a + updateT(a), 0);
}

function getCopies(cards, ks, vs) {
  return = cards.flatMap(function(card) {
    return [...Array(vs[ks.indexOf(card)])].map((x, i) => i + 1 + card);
  })
}

function getNumber(l) {
    let s = l.split(" ");
    return Number(s[s.length - 1])
}

function part1() {
    let data = document.getElementById("input").value.split('\n');
    let t = data.reduce((a, c) => a + countWins(line.split(": ")[1], (t) => t == 0 ? 1 : t * 2))
    document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let ks = [], vs = [];
  for (line of data) {
    let split = line.split(": ");
    ks.push(getNumber(split[0]));
    let x = countWins(split[1], (t => t + 1));
    vs.push(x);
  }
  let t = ks.length;
  let newCards = getCopies(ks, ks, vs);
  while (newCards.length > 0) {
    t += newCards.length;
    newCards = gC(newCards, ks, vs);
  }
  document.getElementById("part-2-answer").textContent = t;
}
