var checkInclusion = function(s1, s2) {
    let s1map = new Array(26).fill(0);
    const map = {}
    
    for(const c of s1) s1map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    map[s1map] = true
    let cur = 0
    while(cur + s1.length <= s2.length){
        const match = s2.slice(cur, cur + s1.length)
        const s1map = new Array(26).fill(0)
        for(const c of match) s1map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        if(map[s1map] !== undefined) return true
        cur++
    }
    return false
};

// Time: O(26 * n) Space: O(26)