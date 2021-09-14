import { merge } from './mergeSortedArray';

describe('merge orted array', () => {
    it('should merge two sorted arrays', () => {
        const nums1 = [1,2,3,0,0,0];
        const m = 3;
        const nums2 = [2,5,6];
        const n = 3;
        const result = [1,2,2,3,5,6];
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual(result);
    })
    it('should merge two sorted arrays when m equals 0', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;
        const result = [1];
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual(result);
    })
    it('should merge two sorted arrays when m an n equals 1', () => {
        const nums1 = [2,0];
        const m = 1;
        const nums2 = [1];
        const n = 1;
        const result = [1,2];
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual(result);
    })
})