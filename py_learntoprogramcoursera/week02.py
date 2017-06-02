# -*- coding: utf-8 -*-

# Week 2

### Strings ###

print('ba' + 'na' * 2 + 'muffin\'')

def add(number1, number2):
    return number1 + number2
    
result = add(1, 3)
new_result = result + 1
print(new_result)

# Storing user input in variable
name = input('What is your name? ')
print('Hello there ' + name + '!')

# multiple lines
print('''How
are
you
?''')

# Documentation strings
def area(base, height):
    '''(number, number) -> number
    
    Return the area of triangle with dimensions base and height.
    
    >>> area(12, 4)
    24.0
    >>> area(3.4, 7)
    11.9
    '''
    
    return base * height / 2

help(area)

### Designing functions ###

#Convert to Celsius function
def to_celsius(fahrenheit):
    '''(int) -> float
    
    Return the number of Celsius degrees equivalent to fahrenheit degrees.
    
    >>> to_celsius(32)
    0.0
    >>> to_celsius(212)
    100.0
    '''
    return (fahrenheit - 32) * 5 / 9
    
print(to_celsius(212))

# Function reuse
def perimeter(side1, side2, side3):
    '''(number, number, number) -> number
    
    Return the perimeter of the triangle with sides of length side1, side2, side3
    
    >>> perimeter(3, 4, 5)
    12
    >>> perimeter(10.5, 6, 9.3)
    25.8
    '''
    return side1 + side2 + side3
    
def semiperimeter(side1, side2, side3):
    '''(number, number, number) -> float
    
    Return the perimeter of the triangle with sides of length side1, side2, side3
    
    >>> perimeter(3, 4, 5)
    6.0
    >>> perimeter(10.5, 6, 9.3)
    11.9
    '''
    return perimeter(side1, side2, side3) / 2

print(semiperimeter(2, 3, 4))

# Combining functions
print(max(semiperimeter(12, 3.5, 2), semiperimeter(6, 15, 3)))

### Asignment
print('hello', '-', 'how', '-', 'are', '-', 'you')

def announce_location(country):
    return country
    
instructor_location = announce_location('Canada')
print(instructor_location)

x = None
print(x)

grade1 = 80
grade2 = 90
average = (grade1 + grade2) / 2
grade1 = 100
print(average)