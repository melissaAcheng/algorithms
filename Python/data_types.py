# Given n scores, store them in a list and find the score of the runner-up

def find_runner_up(arr):
    scoreSet = set(arr)
    scores = list(scoreSet)
    return scores[-2]


print(find_runner_up([2, 3, 6, 6, 5]))

