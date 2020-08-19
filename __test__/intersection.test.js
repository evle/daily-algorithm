const intersection = require('../src/intersection')

test('nums1 = [4,9,5], nums2 = [9,4,9,8,4] => [4, 9]', () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
})

test('nums1 = [1,2,2,1], nums2 = [2, 2]', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
})

