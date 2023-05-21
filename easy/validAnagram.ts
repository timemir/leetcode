function isAnagram(s: string, t: string): boolean {
    const charsOfS = {};
    const charsOfT = {};
    let isValid = true;

    // Fill up the occurrences of each char into their maps
    for (let i = 0; i < s.length; i++) {
        if (charsOfS[s[i]]) {
            charsOfS[s[i]]++;
        } else {
            charsOfS[s[i]] = 1;
        }

        if (charsOfT[t[i]]) {
            charsOfT[t[i]]++;
        } else {
            charsOfT[t[i]] = 1;
        }
    }

    // Compare the occurrences of each char
    Object.entries(charsOfS).forEach(([key, value]) => {
        if (value !== charsOfT[key]) {
            isValid = false;
        }
    });

    return isValid;
}
