with open('../resources/2017/day_2.txt') as f:
    data = f.readlines()


def get_even_divisors(numbers):
    for i in numbers:
        for j in numbers:
            if i != j and i % j == 0:
                return i // j


spreadsheet = []
for row in data:
    spreadsheet.append([int(cell) for cell in row.strip().split('\t')])

print(sum([max(i) - min(i) for i in spreadsheet]))

print(sum([get_even_divisors(i) for i in spreadsheet]))
