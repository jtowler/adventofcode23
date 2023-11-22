from dataclasses import dataclass

with open('../resources/2017/day_8.txt') as f:
    s = [i.strip() for i in f.readlines()]


@dataclass
class Instruction:
    operate_on: str
    inc: bool
    val: int
    conditional: str
    condition: str
    condition_test: int

    def run_condition(self, v):
        if self.condition == '>':
            return v > self.condition_test
        if self.condition == '>=':
            return v >= self.condition_test
        if self.condition == '<':
            return v < self.condition_test
        if self.condition == '<=':
            return v <= self.condition_test
        if self.condition == '!=':
            return v != self.condition_test
        if self.condition == '==':
            return v == self.condition_test

    def new_val(self, v):
        if self.inc:
            return v + self.val
        else:
            return v - self.val

    def run(self, registers):
        if self.run_condition(registers[self.conditional]):
            registers[self.operate_on] = self.new_val(registers[self.operate_on])

    @staticmethod
    def from_string(init_str):
        split = init_str.split()
        return Instruction(split[0], split[1] == 'inc', int(split[2]), split[4], split[5], int(split[6]))


ins = [Instruction.from_string(i) for i in s]
regs = {i.operate_on: 0 for i in ins}

max_val = 0
for i in ins:
    i.run(regs)
    new_max = max(regs.values())
    if new_max > max_val:
        max_val = new_max

print(max(regs.values()))
print(max_val)
