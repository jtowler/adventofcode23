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

function sortHands(h1, h2) {
  if (h1.rank == h2.rank) {
    for (let i = 0; i < h1.cards.length; i++) {
      if (h1.cards[i] != h2.cards[i]) {
        if (order.indexOf(h1.cards[i]) < order.indexOf(h2.cards[i]) ) {
          return 1;
        } else {
          return -1;
        }
      }
    }

  } else if (h1.rank < h2.rank){
    return 1;
  } else {
  return -1;
  }
}
function sortHands2(h1, h2) {
  if (h1.rank == h2.rank) {
    for (let i = 0; i < h1.cards.length; i++) {
      if (h1.cards[i] != h2.cards[i]) {
        if (newOrder.indexOf(h1.cards[i]) < newOrder.indexOf(h2.cards[i]) ) {
          return 1;
        } else {
          return -1;
        }
      }
    }

  } else if (h1.rank < h2.rank){
    return 1;
  } else {
  return -1;
  }
}

function getRank(cards) {
  let ks = [], v = [];
  for (card of cards.split('')) {
    if (ks.includes(card)) {
      v[ks.indexOf(card)]++;
    } else {
      ks.push(card);
      v.push(1)
    }
  }
  v = v.sort();
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
  let ks = [], v = [];
  for (card of cards.split('')) {
    if (ks.includes(card)) {
      v[ks.indexOf(card)]++;
    } else {
      ks.push(card);
      v.push(1)
    }
  }
  let n = 0;
  if (ks.includes('J')) {
    n = v[ks.indexOf('J')];
  }

  v = v.sort();
  if(eqArr(v, [5])) {
    return 1;
  } else if (eqArr(v, [1, 4])) {
    if (n > 0) {
      return 1;
    } else {
      return 2;
    }
  } else if (eqArr(v, [2, 3])) {
    if (n > 0) {
      return 1;
    } else {
      return 3;
    }
  } else if (eqArr(v, [1, 1, 3])) {
    if (n > 0) {
      return 2;
    } else {
      return 4;
    }
  } else if (eqArr(v, [1, 2, 2])) {
    if (n == 1) {
      return 3;
    } else if (n == 2) {
      return 2;
    } else {
      return 5;
    }
  } else if (eqArr(v, [1, 1, 1, 2])) {
    if (n > 0) {
      return 4;
    } else {
      return 6;
    }
  } else {
    if (n > 0) {
      return 6;
    } else {
      return 7;
    }
  }
}

function part1() {
  let data = document.getElementById("input").value.split('\n');
  let hands = [];

  for (line of data) {
    let cards = line.split(" ")[0];
    let bid = Number(line.split(" ")[1]);
    let rank = getRank(cards);
    hands.push({"cards": cards, "bid": bid, "rank": rank})
  }
  hands = hands.sort(sortHands);
  let t = 0;
  for (let i = 0; i < hands.length; i++) {
    t += (i + 1) * hands[i].bid;
  }

  document.getElementById("part-1-answer").textContent = t;
}

function part2() {
  var data = document.getElementById("input").value.split('\n');
let hands = [];

  for (line of data) {
    let cards = line.split(" ")[0];
    let bid = Number(line.split(" ")[1]);
    let rank = getRank2(cards);
    hands.push({"cards": cards, "bid": bid, "rank": rank})
  }
  hands = hands.sort(sortHands2);
  let t = 0;
  for (let i = 0; i < hands.length; i++) {
    t += (i + 1) * hands[i].bid;
  }
  document.getElementById("part-2-answer").textContent = t;
}
