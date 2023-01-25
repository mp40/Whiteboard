import { twoSum } from "./practice";

describe("finding the sum of two numbers in array", () => {
  it("should be correct for given example", () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(array, target)).toEqual([0, 1]);
  });
  it("should be correct when required indices are spread out", () => {
    const array = [11, 2, 15, 7];
    const target = 9;
    expect(twoSum(array, target)).toEqual([1, 3]);
  });
});
