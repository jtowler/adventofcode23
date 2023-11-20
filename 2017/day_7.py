from collections import Counter

with open('../resources/2017/day_7.txt') as f:
    st = [i.strip() for i in f.readlines()]

dl = ' -> '
rules = [i for i in st if dl in i]

d = {}
for rule in rules:
    x, y = rule.split(dl)
    for y1 in y.split(', '):
        d[y1] = x.split(' ')[0]

for i in st:
    a = i.split(' ')[0]
    if a not in d.keys():
        base = a

print(base)

weights = {}
for i in st:
    s = i.split(' ')
    program = s[0]
    weight = int(s[1][1:-1])
    weights[program] = weight


def get_subs(root):
    return [k for k, v in d.items() if v == root]


def get_tree_weight(root):
    this_weight = weights[root]
    subs = get_subs(root)
    for sub in subs:
        this_weight += get_tree_weight(sub)
    return this_weight


def find_bad_sub_weight(root):
    sub_weights = {sub: get_tree_weight(sub) for sub in get_subs(root)}
    c = [k for k, v in Counter(sub_weights.values()).items() if v == 1]
    if len(c) == 0:
        return root
    else:
        e = [k for k, v in sub_weights.items() if v == c[0]]
        return find_bad_sub_weight(e[0])


bad_program = find_bad_sub_weight(base)
bad_weights = {sub: get_tree_weight(sub) for sub in get_subs(d[bad_program])}
bad_weight = bad_weights[bad_program]
others = set(bad_weights.values())
others.remove(bad_weight)
diff = bad_weight - others.pop()

print(weights[bad_program] - diff)
