with open('../resources/2017/day_4.txt') as f:
    passwords = [i.strip().split(' ') for i in f.readlines()]

print(len([i for i in passwords if len(i) == len(set(i))]))

sorted_passwords = []
for line in passwords:
    sorted_passwords.append([''.join(sorted(i)) for i in line])

print(len([i for i in sorted_passwords if len(i) == len(set(i))]))
