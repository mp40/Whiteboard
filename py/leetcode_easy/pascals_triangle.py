def generate(numRows):
    if numRows == 0:
        return []

    if numRows == 1:
        return [[1]]   

    result = [[1]]
    for i in range(1, numRows):
        last = result[i-1]
        next = [1]

        for j in range(1, len(last)):
            next.append(last[j-1] + last[j])

        next.append(1)
        result.append(next)            
    
    return result             