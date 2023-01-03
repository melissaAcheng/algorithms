from collections import Counter

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

# With built-in Counter function


def most_frequent_char(s):
    count = Counter(s)

    best = None
    for char in s:
        if best is None or count[char] > count[best]:
            best = char

    return best


print(most_frequent_char("bookeepper"))

# n = length of s
# Time - O(n)
# Space - O(n)


# 010 Pair Sum

# Write a function, pair_sum, that takes in a list and a target sum as arguments. The function should return a tuple containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

# Be sure to return the indices, not the elements themselves.

# There is guaranteed to be one such pair that sums to the target.

def pair_sum(numbers, target_sum):
    seen = {}

    for index, num in enumerate(numbers):
        difference = target_sum - num
        if difference in seen:
            return (seen[difference], index)

        seen[num] = index


print(pair_sum([3, 2, 5, 4, 1], 8))
