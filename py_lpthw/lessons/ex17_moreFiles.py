# More files

print ('More files')
print('')

# we need to import additional module
# Python3 doesn have 'exist' keyword anymore
import os.path 
from sys import argv

script, from_file, to_file = argv

print ('Copying from %s to %s' % (from_file, to_file))

# find out how do this on one line
in_file = open(from_file)
indata = in_file.read()

print ('The input file is %d bytes long' % len(indata))

# wee need to use 'os.path.isfile' built-in function from module os.path
# because 'exist' is not supported in Python3
print ('Does the output file exists? %r' % os.path.isfile(to_file))
print ('Ready, hit RETURN to continue, ctrl+c to abort.')

input('?')

out_file = open(to_file, 'w')
out_file.write(indata)

print ('Alright, all done.')

out_file.close()
in_file.close()