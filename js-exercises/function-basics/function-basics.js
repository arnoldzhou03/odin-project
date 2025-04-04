function add7(val) {
    return val + 7;
}
function multiply(v1, v2) {
    return v1 * v2;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
}
function lastLetter(str) {
    return str.charAt(str.length-1);
}

console.log(capitalize("tESTING"))