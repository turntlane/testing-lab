module.exports = {
    returnTwo: () => {
        return 2
    },
    greeting: (name) => {
        return typeof `Hello ${name}`
    },
    add: (num1, num2) => {
        return num1 + num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        return num1 / num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    truthy: () => {
        return true
    },
    // mathString: (num1, num1) => {
    //     return num1 + 'num2'
    // },
    // moreArgs: (a, b) => {
    //     return a, b
    // }

}