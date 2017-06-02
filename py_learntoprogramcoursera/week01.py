# -*- coding: utf-8 -*-

# Week 1

# Addition
print(5+3)

# Substraction
print(10-2)

# Multiplication
print(6*6)

# Exponantion
print(2**5)

# Division
print(11/5)

# Integer division will evaluate how many whole numbers we get from this division. This will give us 0
print(2//3)

# This division will get us two whole numbers, we can write this as '2 1/3'
print(7//3)

# modulo (reminder)
print(4%2)
print(100%7)

### Built-in functions ###

# Max function, prints maximum in given range
print(max(36.7, 23.4, 6.7, 809.4))

# list of biult-in functions
print(dir(__builtins__))

# Help for function
help(abs)

# pow help - it takes two arguments and the last in [square] brackets is optional
help(pow)

### Defining Functions ###

## Definig: Math function f(x)=x^2
def f(x):
    return x**2
   
## Invoking: function 'f' with one argument to a variable
result = f(3)

print(result)

## Defining: Area of a triangle
def triangle(base, height):
    return base * height / 2
    
## Invoking:
area = triangle(3, 4)
print(area)

## Defining: perimeter function with three arguments
def perimeter(value1, value2, value3):
    return value1 + value2 + value3
    
## Invoking:
place = perimeter(10, 20, 30)
print(place)

### Asignment ###
help(round)

help(id)

print(12/3)

print(12//3)

x = 3
y = 5
x = y
print(x)

x = 3
y = 5
x = y
print(y)

print(round(45.342))

def even_bigger(x):
    return (2 * x) ** x

print(even_bigger(12))