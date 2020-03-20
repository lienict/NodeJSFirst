function sum(arr) {
    return arr.reduce((x, y) => {
        return x + y;
    }, 0)
}

// module.exports = {
//     sum
// }

module.exports.sum = sum