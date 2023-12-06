function parse(data) {
   let maps = [], fromMap = "", toMap = "";
   for (line of data) {
     if (line == "") {
       continue;
     } else if (line.includes("map")) {
       let s = line.split(" ")[0].split("-to-");
       fromMap = s[0];
       toMap = s[1];
     } else {
       let s = line.split(" ");
       maps.push({
         "from": fromMap,
         "to": toMap,
         "toStart": Number(s[0]),
         "fromStart": Number(s[1]),
         "range": Number(s[2])})
     }
   }
   return maps;
}

function mapSeed(seed, mapFrom, seedMaps) {
    for (let i = 0; i < seedMaps.length; i++) {
      let seedMap = seedMaps[i];
      if (seedMap.from == mapFrom) {
        if (seed >= seedMap.fromStart && seed < (seedMap.fromStart + seedMap.range)) {
          let ind = seed - seedMap.fromStart;
          return ind + seedMap.toStart;
        }
      }
    }
  return seed;
}

function mapSeedRev(seed, mapTo, seedMaps) {
    for (let i = 0; i < seedMaps.length; i++) {
      let seedMap = seedMaps[i];
      if (seedMap.to == mapTo) {
        if (seed >= seedMap.toStart && seed < (seedMap.toStart + seedMap.range)) {
          let ind = seed - seedMap.toStart;
          return ind + seedMap.fromStart;
        }
      }
    }
  return seed;
}

function inSeedRange(seed, seedLowers, seedUppers) {
  for (let i = 0; i < seedLowers.length; i++) {
    if (seedLowers[i] <= seed && seed < seedUppers[i]) return true
  }
  return false;
}

function part1() {
    let froms = ['seed', 'soil', 'fertilizer', 'water', 'light', 'temperature', 'humidity'];
    let data = document.getElementById("input").value.split('\n');
    let seeds = data[0].split(" ").slice(1).map((x) => Number(x));
    let seedMaps = parse(data.slice(2));

    for (fr of froms) {
      seeds = seeds.map((x) => mapSeed(x, fr, seedMaps))
    }
    document.getElementById("part-1-answer").textContent = Math.min(...seeds);
}

function part2() {

  let smorf = ['location', 'humidity', 'temperature', 'light', 'water', 'fertilizer', 'soil'];
  let data = document.getElementById("input").value.split('\n');
  let seeds = data[0].split(" ").slice(1).map((x) => Number(x));
  let seedMaps = parse(data.slice(2));

  let seedUppers = [], seedLowers = [];

  for (let i = 0; i < seeds.length; i += 2) {
    seedLowers.push(seeds[i]);
    seedUppers.push(seeds[i] + seeds[i + 1]);
  }
  let loc = 0;
  while (true) {
    let seed = loc;
    for (sm of smorf) {
      seed = mapSeedRev(seed, sm, seedMaps);
    }
    if (inSeedRange(seed, seedLowers, seedUppers)) {
      break
    }
    loc += 1;
  }
    document.getElementById("part-2-answer").textContent = loc;
}
