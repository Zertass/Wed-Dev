// first task
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}
// second task
function count(obj) {
    return Object.keys(obj).length;
}