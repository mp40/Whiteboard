def isPalindrome(x):
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    if x < 10:
        return True   

    reversed = 0
    while x > reversed:
        reversed = reversed * 10 + x % 10
        x = int(x / 10)
        
    return x == reversed or x == int(reversed / 10) 