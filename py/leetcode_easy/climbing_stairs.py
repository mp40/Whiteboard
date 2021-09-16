def climbStairs(n: int) -> int:
    if n < 4:
	    return n

    before_last = 2  
    last = 3

    i = 4
    while i < n:
        temp = last + before_last
        before_last = last
        last = temp
        i += 1

    return last + before_last          
