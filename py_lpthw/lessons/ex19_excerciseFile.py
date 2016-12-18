# Lesson 19 excercise file
from sys import argv

script, funArg = argv

# number 1
def argVariable(funArg):
    print ('This function is using script\'s %s argument %s.' % (script, funArg))

argVariable(funArg)

print ('Please provide a argument for next function:')
userArg = input('> ')

# number 2
def userVar(userArg):
    print ('This argument is from you: %s' % userArg)

userVar(userArg)

# number 3
var1 = 40
var2 = 50
var3 = var1 + var2

def countFun(var1, var2, var3):
    print ('%d + %d = %d' % (var1, var2, var3))

countFun(var1, var2, var3)

# number 4
def intAndStr(int1, str1, int2, str2):
    print ('Numbers are: %d and %d' % (int1, int2))
    print ('And strings are %s and %s' % (str1, str2))

intAndStr(30, 'First', 50, 'Second')

# number 5
userInput1 = input('Write your name: ')
userInput2 = input('Write you last name: ')
sepNumber = input('How many stars you want to have: ')

def generateThis(argument1, argument2, sepNumber):
    print ('Your first name is: %s' % userInput1)
    print ('*' * int(sepNumber))
    print ('Your last name is: %s' % userInput2)

generateThis(userInput1, userInput2, sepNumber)

# number 6
print ('Let\'s divide now.')
firstNum = input('Give me a numenator: ')
secondNum = input('Give me a denominator: ')

def division(firstNum, secondNum):
    one = int(firstNum)
    two = int(secondNum)
    result = one / two
    reminder = one % two
    if reminder == 0:
        print('The formula has no reminder.')
        print ('The result is: %d' % result)
    else:
        print ('The result is: %d' % result)
        print ('And the reminder is: %d' % reminder)

division(firstNum, secondNum)
