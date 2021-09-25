def intersect(nums1, nums2):
    results = []
    m = {}

    for i in nums1:
        if i in m:
            m[i] += 1
        else:
            m[i] = 1           

    for j in nums2:
        if j in m and m[j] > 0:
            m[j] -= 1
            results.append(j)    

    return results    
   