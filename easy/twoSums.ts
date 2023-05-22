function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [0, 0];
}

// O(n^2) time & O(1) space complexity solution
// Often you can improve these algorithms to O(n) & O(n)
// Why is this good?
// -> You can always buy more space, but cannot buy time

function twoSum2(nums: number[], target: number): number[] {
    const lookupMap = {};
    // cur + x = target <=> x = target - cur

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const x = target - cur;

        if (lookupMap[x] >= 0) {
            // ">= 0" is very important! lol
            return [i, lookupMap[x]];
        } else {
            lookupMap[cur] = i;
        }
    }
}

// O(n) time & O(n) space complexity solution
