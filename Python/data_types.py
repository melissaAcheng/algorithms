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
# print(truckTour(p))

# Merge two sorted linked lists into a single, sorted linked list
class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def merge_lists(head1, head2):
  p1 = head1
  p2 = head2
  dummyHead = Node(None)
  head = dummyHead

  while p1 != None and p2 != None:
    if p1.val <= p2.val:
      head.next = p1
      p1 = p1.next
    else:
      head.next = p2
      p2 = p2.next
    head = head.next

  if p1 != None: head.next = p1
  if p2 != None: head.next = p2

  return dummyHead.next

a = Node(5)
b = Node(7)
c = Node(10)
d = Node(12)
e = Node(20)
f = Node(28)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
# 5 -> 7 -> 10 -> 12 -> 20 -> 28

q = Node(6)
r = Node(8)
s = Node(9)
t = Node(25)
q.next = r
r.next = s
s.next = t
# 6 -> 8 -> 9 -> 25

print(merge_lists(a, q))
# 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 