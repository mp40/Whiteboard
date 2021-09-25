def lengthOfLastWord(s):
    s = s.strip()
    
    if len(s) == 0:
        return 0

    s = s.split()

    return len(s[-1])

   