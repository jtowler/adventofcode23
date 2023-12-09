const order = "AKQJT98765432"
const newOrder = "AKQT98765432J";

function eqArr(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) {
      return false
    }
  }
  return true;
}

function sortHands(h1, h2, orderStr) {
  if (h1.rank == h2.rank) {
    for (let i = 0; i < h1.cards.length; i++) {
      if (h1.cards[i] != h2.cards[i]) {
        return orderStr.indexOf(h1.cards[i]) < orderStr.indexOf(h2.cards[i]) ? 1 : -1;
      }
    }
  } else {
    return h1.rank < h2.rank ? 1 : -1;
  }
}


function sortHands1(h1, h2) {
  return sortHands(h1, h2, order)
}

function sortHands2(h1, h2) {
  return sortHands(h1, h2, newOrder)
}

function getHands(line, rankF) {
  let cards = line.split(" ")[0];
  let bid = Number(line.split(" ")[1]);
  let rank = rankF(cards);
  return {"cards": cards, "bid": bid, "rank": rank};
}

function getV(cards) {
  let ks = [], v = [];
  for (card of cards.split('')) {
    if (ks.includes(card)) {
      v[ks.indexOf(card)]++;
    } else {
      ks.push(card);
      v.push(1)
    }
  }
  return v.sort();
}

function getRank(cards) {
  v = getV(cards);
  if(eqArr(v, [5])) {
    return 1;
  } else if (eqArr(v, [1, 4])) {
    return 2;
  } else if (eqArr(v, [2, 3])) {
    return 3;
  } else if (eqArr(v, [1, 1, 3])) {
    return 4;
  } else if (eqArr(v, [1, 2, 2])) {
    return 5;
  } else if (eqArr(v, [1, 1, 1, 2])) {
    return 6;
  } else {
    return 7;
  }
}

function getRank2(cards) {
  let n = cards.split('').filter((x) => x == 'J').length;
  v = getV(cards);
  if(eqArr(v, [5])) {
    return 1;
  } else if (eqArr(v, [1, 4])) {
    return n > 0 ? 1 : 2;
  } else if (eqArr(v, [2, 3])) {
    return n > 0 ? 1 : 3;
  } else if (eqArr(v, [1, 1, 3])) {
    return n > 0 ? 2 : 4;
  } else if (eqArr(v, [1, 2, 2])) {
    if (n == 1) {
      return 3;
    } else if (n == 2) {
      return 2;
    } else {
      return 5;
    }
  } else if (eqArr(v, [1, 1, 1, 2])) {
    return n > 0 ? 4 : 6;
  } else {
    return n > 0 ? 6 : 7;
  }
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let hands = data.map((x) => getHands(x, getRank)).sort(sortHands1);
  let t = 0;
  for (let i = 0; i < hands.length; i++) {
    t += (i + 1) * hands[i].bid;
  }
  document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  let data = document.getElementById("input").value.split('\n');
  let hands = data.map((x) => getHands(x, getRank2)).sort(sortHands2);
  let t = 0;
  for (let i = 0; i < hands.length; i++) {
    t += (i + 1) * hands[i].bid;
  }
  document.getElementById("part-2-answer").textContent = t;
}
