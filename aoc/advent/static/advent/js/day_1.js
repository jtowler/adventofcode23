const ns = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function replaceLastString(line) {
    let i = 0, index = -1, nsValue = "";
    while (i < line.length) {
        for (const n of ns) {
            if (line.substring(i, i + n.length) == n) {
                index = i;
                nsValue = n;
            }
        }
        i++;
    }
    if (index >= 0) {
        let rString = (ns.indexOf(nsValue) + 1).toString();
        return line.substring(0, index) + rString + line.substring(index + nsValue.length, line.length);
    }
    return line;
}


function replaceFirstString(line) {
    let i = 0;
    while (i < line.length) {
        for (const n of ns) {
            if (line.substring(i, i + n.length) == n) {
                let newString = (ns.indexOf(n) + 1).toString();
                return line.replace(n, newString);
            }
        }
        i++;
    }
    return line;
}

function part1() {
    let data = document.getElementById("input").value.split('\n');
    let tot = data.reduce(function(acc, curr){
      let chars = curr.split('');
      let first = chars.find((c) => c >= '0' && c <= '9');
      let last = chars.toReverse().find((c) => c >= '0' && c <= '9');
      return acc + parseInt(first + last);
    })
    document.getElementById("part-1-answer").textContent = tot;
}

function part2() {
    let rawData = document.getElementById("input").value.split('\n');
    let tot = data.reduce(function(acc, curr){
      let first = replaceFirstString(curr).split('').find((c) => c >= '0' && c <= '9');
      let last = replaceLastString(curr).split('').toReverse().find((c) => c >= '0' && c <= '9');
      return acc + parseInt(first + last);
    })
    document.getElementById("part-2-answer").textContent = tot;
}