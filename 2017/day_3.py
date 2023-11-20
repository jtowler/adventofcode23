def anti_clockwise(direction):
    d = {
        (1, 0): (0, 1),
        (0, 1): (-1, 0),
        (-1, 0): (0, -1),
        (0, -1): (1, 0)
    }
    return d[direction]


def get_adjacents(pos):
    xp, yp = pos
    adjs = []
    for x in [-1, 0, 1]:
        for y in [-1, 0, 1]:
            if x == 0 and y == 0:
                continue
            else:
                adjs.append((x + xp, y + yp))
    return adjs

def check_anti_clockwise(position, direction, spiral):
    dx, dy = anti_clockwise(direction)
    return (position[0] + dx, position[1] + dy) not in spiral


def generate_spiral(n):
    cur = 1
    pos = (0, 0)
    spiral = {pos: cur}
    cur_dir = (0, 1)
    while len(spiral) < n:
        new_pos = pos[0] + cur_dir[0], pos[1] + cur_dir[1]
        cur += 1
        spiral[new_pos] = cur
        pos = new_pos
        if check_anti_clockwise(pos, cur_dir, spiral):
            cur_dir = anti_clockwise(cur_dir)
    return spiral


spiral_size = 289326

spiral = generate_spiral(spiral_size)
reverse_spiral = {v: k for k, v in spiral.items()}

x, y = reverse_spiral[spiral_size]
print(abs(x) + abs(y))

new_spiral = {(0, 0): 1}
i = 2
while True:
    pos = reverse_spiral[i]
    adjs = get_adjacents(pos)
    val = sum(new_spiral[a] for a in adjs if a in new_spiral)
    new_spiral[pos] = val
    i += 1
    if val > spiral_size:
        break
print(val)