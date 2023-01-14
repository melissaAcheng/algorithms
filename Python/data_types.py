# Given n scores, store them in a list and find the score of the runner-up

def find_runner_up(arr):
    scoreSet = set(arr)
    scores = list(scoreSet)
    return scores[-2]


# print(find_runner_up([2, 3, 6, 6, 5]))

# Palindrome Index
# given a string return the index to remove to make the string a palindrome
# if the string is already a palindrome, return -1


def palindromeIndex(s):
    # check if palindrome
    if s == s[::-1]:
        return -1

    n = len(s)
    l = 0
    r = len(s) - 1

    while l <= r:
        if s[l] != s[r]:
            if s[l+1] == s[r]:
                return l
            elif s[l] == s[r-1]:
                return r
        l += 1
        r -= 1


# print(palindromeIndex("baaa"))

# n = length of s
# Time = O(n)
# Space = O(1) using two pointers

# Truck Tour


def truckTour(petrolpumps):
  # initialize the position and amount of petrol to 0
    position = petrol = 0

  # loop through each petrolpump
  # unpack the list (petrol, distance)
  # calculate the amount of leftover petrol after each pump by subtracting p - d
  # if total petrol is less than 0, then start from the next pump and reset petrol to 0
    for i in range(len(petrolpumps)):
        p, d = petrolpumps[i]
        petrol += p - d
        if petrol < 0:
            position = i + 1
            petrol = 0

    return position


p = [[1, 5], [10, 3], [3, 4]]
print(truckTour(p))
