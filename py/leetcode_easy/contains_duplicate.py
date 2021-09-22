def containsDuplicate(nums):
    s = set(nums)

    return len(nums) != len(s)

def containsDuplicateIterativeVersion(nums):
    map = {}

    for n in nums:
        if n in map:
            return True
        else:
            map[n] = 1   

    return False