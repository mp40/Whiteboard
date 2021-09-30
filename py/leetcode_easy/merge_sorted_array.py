def merge(nums1, m, nums2, n):
    end = len(nums1) - 1
    m -= 1
    n -= 1

    while n >= 0:
        if m >=0 and nums1[m] > nums2[n]:
            nums1[end] = nums1[m]
            m -= 1
        else:
            nums1[end] = nums2[n]
            n -= 1
        end -= 1                        