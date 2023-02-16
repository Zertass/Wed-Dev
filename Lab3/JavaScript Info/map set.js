// first task
function unique(arr) {
    return Array.from(new Set(arr));
}
// second task
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
  
    return Array.from(map.values());
}
// third task
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());