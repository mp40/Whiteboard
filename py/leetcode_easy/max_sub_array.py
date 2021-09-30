def maxSubArray(nums):
    bestValue = nums[0]
    previousBest = nums[0]

    i = 1
    while i < len(nums):
        currentValue = nums[i]

        if currentValue < currentValue + previousBest:
            previousBest = currentValue + previousBest
        else:
            previousBest = currentValue

        if previousBest > bestValue:
            bestValue = previousBest                        

        i += 1

    return bestValue