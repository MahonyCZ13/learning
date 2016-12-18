# Functions can return something
print ('\nFunction can return somethong\n')

def add(a, b):
    print('Adding %d + %d' % (a, b))
    return a + b

def substract(a, b):
    print ('Substracting %d - %d' % (a, b))
    return a - b

def multiply(a, b):
    print ('Multiplying %d * %d' % (a, b))
    return a * b

def divide(a, b):
    print ('Dividing %d / %d' % (a, b))
    return a / b

print ('Let\'s do some math with just functions!')

age = add(30, 5)
height = substract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)

print('\nAge %d, Height %d, Weight %d, IQ %d\n' % (age, height, weight, iq))

print ('\nHere is a puzzle:\n')

what = add(age, substract(height, multiply(weight, (divide(iq, 2)))))

print ('\nThat becomes: ', what, 'Can you do it by hand?\n')
