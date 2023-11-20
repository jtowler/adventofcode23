from copy import deepcopy

with open('../resources/2017/day_5.txt') as f:
    jumps = [int(i) for i in f.readlines()]

def exit_maze(js, part2=False):
    n = 0
    ind = 0
    while True:
        nxt = ind + js[ind]
        if part2 and js[ind] > 2:
            js[ind] -= 1
        else:
            js[ind] += 1
        ind = nxt
        n += 1
        if ind < 0 or ind >= len(js):
            break
    return n

print(exit_maze(deepcopy(jumps)))
print(exit_maze(deepcopy(jumps), True))