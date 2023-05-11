function containsDuplicate(nums: number[]): boolean {
    // Map to count the occurrence of each number in nums
    const occurrenceMap = {};

    // Loop over nums
    for (let i = 0; i < nums.length; i++) {
        // If we saw the number: return true, else add it to the map
        if (occurrenceMap[nums[i]]) {
            return true;
        } else {
            occurrenceMap[nums[i]] = 1;
        }
    }
    // Return false, if the loop did not "break"
    return false;
}

// Note: Set Solution is 30ms faster than this and only 2 lines. :)
