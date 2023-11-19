with open('../resources/2017/day_1.txt') as f:
    captcha = f.readline()

total = int(captcha[0]) if captcha[0] == captcha[-1] else 0
for i, j in zip(captcha[:-1], captcha[1:]):
    if i == j:
        total += int(i)
print(total)

lc = len(captcha) // 2
total = 0
for i in range(lc):
    if captcha[i] == captcha[i + lc]:
        total += int(captcha[i])
print(total * 2)
