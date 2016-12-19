# Even more practice

print('\nEven more practice\n')

import ex25_supportFile

sentence = 'All good things come to those who wait.'

words = ex25_supportFile.break_words(sentence)
words

sorted_words = ex25_supportFile.sort_words(words)
sorted_words

ex25_supportFile.print_first_word(words)
ex25_supportFile.print_last_word(words)
words

ex25_supportFile.print_first_word(sorted_words)
ex25_supportFile.print_last_word(sorted_words)
sorted_words

ex25_supportFile.print_first_and_last(sentence)
ex25_supportFile.print_first_and_last_sorted(sentence)