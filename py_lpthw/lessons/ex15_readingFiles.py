# Reading files
print ('Reading Files')
print ('')

# importing modules to script
from sys import argv

# setting up argumnets variables
script, filename = argv

# assign variable 'txt' built-in function 'open'
# to store file content for later use
txt = open(filename)

# Display text with aour filename
print ('Here is your file:%r' % filename)

# Reads the file and print is
print (txt.read())

# closes the file a empty memory (!!! this is important step !!!)
txt.close()

# assign new value for filename from user input
print ('Type the filename again:')
file_again = input('> ')

# Stores file content into memory
txt_again = open(file_again)

# Reads the file again
print (txt_again.read())
txt_again.close()
