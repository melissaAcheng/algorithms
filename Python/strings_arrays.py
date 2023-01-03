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

# n = length of numbers
# Time = O(n)
# Space = O(n)


# 013 Intersection

# Write a function, intersection, that takes in two lists, a,b, as arguments. The function should return a new list containing elements that are in both of the two lists.

# You may assume that each input list does not contain duplicate elements.

def intersection(a, b):
    duplicates = []

    items = set(a)

    for ele in b:
        if ele in items:
            duplicates.append(ele)

    return duplicates


a = [4, 2, 1, 6]
b = [3, 6, 9, 2, 10]

print(intersection(a, b))

# n = length of list a
# m = length of list b
# Time = O(n + m)
# Space = O(n)

# Using a set and list comprehension to create a new list based on the values of an exisiting list


def intersection_2(a, b):
    items = set(a)
    return [ele for ele in b if ele in items]


print(intersection_2(a, b))

# 014 Five Sort

# Write a function, five_sort, that takes in a list of numbers as an argument. The function should rearrange elements of the list such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original list. The function should return the list.

# Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the list.

# Using Two-Pointers

def five_sort(nums):
  i = 0
  j = len(nums) - 1

  while i < j:
    if nums[j] == 5:
      j -= 1
    elif nums[i] == 5:
      nums[i], nums[j] = nums[j], nums[i]
      i += 1
    else:
      i += 1
  
  return nums

# n = length of nums
# Time = O(n)
# Space = O(1)
