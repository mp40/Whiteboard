def containsDuplicate(nums):
    s = set(nums)

    return len(nums) != len(s)