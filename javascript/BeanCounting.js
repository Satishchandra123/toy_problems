function countBs(st) {
    var count = 0;
    for(var i = 0; i < st.length; i++) {
        if(st[i] == "B") {
            count++;
        }
    }
    return count;
}

function countChar(st,ch) {
    var count = 0;
    for(var i = 0; i < st.length; i++) {
        if(st[i] == ch) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBHJGBUIKBGTH"));
console.log(countChar("BBHJGBUIKBGTH", "H"));
