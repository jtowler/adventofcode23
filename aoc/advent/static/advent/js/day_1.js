function part1() {
    var data = document.getElementById("input").value.split('');

    let i = 0, tot = 0;
    while (i < data.length - 1) {
        if (data[i] == data[i + 1]) {
            tot += Number(data[i])
        }
        i++;
    }

    if (data[0] == data[data.length - 1]) {
        tot += Number(data[0])
    }

    document.getElementById("part-1-answer").textContent = tot;
}

function part2() {
    var data = document.getElementById("input").value.split('');
    var l = data.length / 2;
    let i = 0, tot = 0;
    while (i < l) {
        if (data[i] == data[i + l]) {
            tot += Number(data[i])
        }
        i++;
    }
    document.getElementById("part-2-answer").textContent = tot * 2;
}