# Reading and writing files
print ('Reading and writing files')
print ('')

# Functions to remember:
# close - Closes the file (and saves it)
# read - Reads the content of the file. It can be assigned to a variable
# readline - Reads only one line of the text file
# truncate - Empties the file.
# write('stuff') - Writes "stuff" to the file


from sys import argv

script, filename = argv

print ('We\'re going to erase %r.'% filename)
print ('If you don\'t want to do it, pres ctrl+C (^C).')
print ('If you do want to proceed, hit RETURN')

input('?')

print ("opening file...")
target = open(filename, 'w')

print ('Truncating the file. Goodbye!')

target.truncate()

print ('Now I\'m going to ask you for a three lines.')

line1 = input('line1: ')
line2 = input('line2: ')
line3 = input('line3: ')

print ('I\'m going to write these into the file')

target.write(line1)
target.write('\n')
target.write(line2)
target.write('\n')
target.write(line3)
target.write('\n')

print ('And finally, we close it.')

target.close()
