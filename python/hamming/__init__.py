# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(first, second):
    if first == second:
        return 0
    elif len(first) != len(second):
        raise ValueError('%s and %s are not the same length.' % (first, second,))
    else:
        count = 0
        for i in range(0, len(first)):
            if first[i] != second[i]:
                count += 1
        return count
