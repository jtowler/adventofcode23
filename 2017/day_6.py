from copy import deepcopy

with open('../resources/2017/day_6.txt') as f:
    blocks = f.readline()
blocks = [int(i) for i in blocks.split('\t')]


seen_blocks = [deepcopy(blocks)]
while True:
    bank = blocks.index(max(blocks))
    bank_val = blocks[bank]
    blocks[bank] = 0
    for i in range(bank_val):
        ind = (bank + i + 1) % len(blocks)
        blocks[ind] += 1
    if blocks in seen_blocks:
        break
    else:
        seen_blocks.append(deepcopy(blocks))

print(len(seen_blocks))
print(len(seen_blocks) - seen_blocks.index(blocks))
