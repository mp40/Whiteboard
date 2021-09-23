def rob(nums):
    if len(nums) == 0:
        return 0
    
    include = 0
    exclude = 0
    
    for house in nums:
      temp = include
      include = house + exclude
      exclude = temp if temp > exclude else exclude

    return include if include > exclude else exclude   
