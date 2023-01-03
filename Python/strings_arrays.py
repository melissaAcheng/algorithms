# 009 Most Frequent Char

# Write a function, most_frequent_char, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

# You can assume that the input string is non-empty.

def most_freq_char(s):
  # create a dict to keep track of letter count
  count = {}

  # loop through s
  for char in s:
    if char not in count:
      count[char] = 0
    count[char] += 1

  # set initial best to none
  best = None

  # loop through s and compare char count to current best count
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  
  return best

print(most_freq_char("bookeeper"))