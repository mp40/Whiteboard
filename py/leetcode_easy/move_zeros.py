def moveZeros(nums):
    if len(nums) < 2:
        return

    slowPointer = 0
    fastPointer = 0

    while fastPointer < len(nums):
        if nums[fastPointer] != 0:
            nums[slowPointer] = nums[fastPointer]

            if slowPointer != fastPointer:
                nums[fastPointer] = 0

            slowPointer += 1                


        fastPointer += 1
                