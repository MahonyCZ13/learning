# Parameters, Unpacking, Variables
print ('Parameters, Unpacking, Variables')
print ('')

from sys import argv # argv is argument variable

# argv[0] is always a script (file) name, then arg[1] -> argv[x] are variables
# they are unpacking from argv. We need to launch the script with corresponding arguments
# like: >>>ex13_parametersVariables.py firstVar secondVar thirdVar

script, first, second, third = argv

print ('First var change:')
first = input();

print ('The script is called:', script)
print ('Your first variable is:', first)
print ('Your second variable is:', second)
print ('Your third variable is:', third)