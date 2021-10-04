def missingNumber(nums):
    hashSet = set(nums)

    for i in range(len(nums)+1):
        if i not in hashSet:
            return i
