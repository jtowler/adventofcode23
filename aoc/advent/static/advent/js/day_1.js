const ns = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function checkChar(c) {
    return c >= '0' && c <= '9'
}

function getFirst(chars) {
    for (c of chars) {
        if (checkChar(c)) {
            return c;
        }
    }
}

function getLast(chars) {
    var i = chars.length - 1;
    while (!checkChar(chars[i])) {
        i--;
    }
    return chars[i];
}

function replaceLastString(line) {
    var i = 0, index = -1, nsValue = "";
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
        var rString = (ns.indexOf(nsValue) + 1).toString();
        return line.substring(0, index) + rString + line.substring(index + nsValue.length, line.length);
    }
    return line;
}


function replaceFirstString(line) {
    let i = 0;
    while (i < line.length) {
        for (const n of ns) {
            if (line.substring(i, i + n.length) == n) {
                var newString = (ns.indexOf(n) + 1).toString();
                return line.replace(n, newString);
            }
        }
        i++;
    }
    return line;
}

function part1() {
    var data = document.getElementById("input").value.split('\n');
    var tot = 0;
    for (line of data) {
        var chars = line.split('');
        var first = getFirst(chars);
        var last = getLast(chars);
        tot += parseInt(first + last);
    }
    document.getElementById("part-1-answer").textContent = tot;
}

function part2() {
    var rawData = document.getElementById("input").value.split('\n');
    var t = 0;
    for (var line of rawData) {
        var first = getFirst(replaceFirstString(line).split(''));
        var last = getLast(replaceLastString(line).split(''));
        t += parseInt(first + last);
    }

    document.getElementById("part-2-answer").textContent = t;
}