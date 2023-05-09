function romanToInt(s: string): number {
    // Map to get numerical value of a roman letter
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    // Variable to store numerical value
    let result = 0;

    // Loop over the string and add values to result
    for (let i = 0; i < s.length; i++) {
        const currLetter = s[i];
        const nextLetter = s[i + 1];

        /*
        Check for special cases:
        - IV or IX
        - XL or XC
        - CD or CM
        */
        if (
            (currLetter === "I" &&
                (nextLetter === "V" || nextLetter === "X")) ||
            (currLetter === "X" &&
                (nextLetter === "L" || nextLetter === "C")) ||
            (currLetter === "C" && (nextLetter === "D" || nextLetter === "M"))
        ) {
            result += romanMap[nextLetter] - romanMap[currLetter];
            i++;
        } else {
            result += romanMap[currLetter];
        }
    }

    return result;
}

const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
