# Strings and text
print ('Strings and text')
print ('')

x = 'There are %d types of people.' % 10
binary = 'binary'
do_not = "don't"
y = "Those who know %s and those who %s." % (binary, do_not)

print (x)
print (y)

print ('Is said: %r.' % x)
print ("I also said: '%s'" % y)

hilarious = False
joke_eval = "Isn't that joke funny? %r"

print (joke_eval % hilarious)

w = 'This is the left side of this '
e = 'right side of the string.'

print (w + e)