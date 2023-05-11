function containsDuplicate(nums: number[]): boolean {
    // Map to count the occurrence of each number in nums
    const occurrenceMap = {};

    // Loop over nums and add it to the occurrenceMap.
    for (let i = 0; i < nums.length; i++) {
        if (occurrenceMap[nums[i]]) {
            return true;
        } else {
            occurrenceMap[nums[i]] = 1;
        }
    }

    return false;
}

// Note: Set Solution is 30ms faster than this and only 2 lines. :)
