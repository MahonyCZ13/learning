# Names, Varialbes, Code, Functions

print ('Names, Varialbes, Code, Functions')
print('')

# This one is like your script with args
# It can take as many args as we specify:
def print_two(*args):
    arg1, arg2 = args
    print ('arg1: %r, arg2: %r' % (arg1, arg2))

# ok, that '*args' is actually pointless, we can just do this:
def print_two_again(arg1, arg2):
    print ('arg1: %r, arg2: %r' %(arg1, arg2))

# this just takes one argument:
def print_one(arg1):
    print ('arg1: %r' % arg1)

# This takes no arguments:
def print_none():
    print ('I got nothing...')

print_two('John','Mitchel')
print_two_again('Dick','Howard')
print_one('One arg')
print_none()
