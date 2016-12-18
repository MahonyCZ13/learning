# This is custom file from LPTHW excerciise 16

from sys import argv

script, filename = argv

print ('This is the file you have listed as this script %r argument: %r' % (script, filename))

 
txt = open(filename)

print ('This is what the file contains:')
print (txt.read())
txt.close()
print ('Now we will erase the text inside it and write something new.')
print ('If you do not want to erase it, press ctrl+C (^C)')
print ('If you are brave enough, press RETURN')

input('?')

newTxt = open(filename, 'w')

print ('Now tell me the first line:')
line1 = input('> ')
print ('And the second:')
line2 = input('> ')
print ('And finally the third:')
line3 = input('> ')

print ('Now let\'s delete the contents first...')
newTxt.truncate()

print ('It\'s done.')
print ('Now for the writing...')
newTxt.write(line1)
newTxt.write('\n')
newTxt.write(line2)
newTxt.write('\n')
newTxt.write(line3)
newTxt.write('\n')

print('And finally closing it.')

newTxt.close()

print ('And done.')
print ('Opening the file...')
newNewTxt = open(filename)
print (newNewTxt.read())
print ('And close it.')
newNewTxt.close()

print('Everything was successfully processed.\nHave a nice day.')