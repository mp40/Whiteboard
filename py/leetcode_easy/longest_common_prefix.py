def longestCommonPrefix(strs):
    if len(strs) == 0:
        return ""

    if len(strs) == 1:
        return strs[0]

    result = strs[0]

    for s in strs:
        for i in range(len(result)):
            if i == len(s) or s[i] != result[i]:
                result = result[0:i]
                break

    return result                
        