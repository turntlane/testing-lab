
const {returnTwo, greeting, add, multiply, divide, subtract, truthy, mathString, moreArgs} = require('./functions')

test('Should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return Hello James', () => {
    expect(greeting(typeof 'James')).toEqual(typeof `Hello James`)
})

describe('Math Functions', () => {
    test('Should return sum of num1 and num2', () => {
        expect(add(1, 2)).toEqual( 3)
        expect(add(5, 9)).toEqual(14)
    
    })
    
    test('Should return num1 * num2', () => {
        expect(multiply(5, 5)).toEqual(25)
    })
    
    test('Should return num1 / num2', () => {
        expect(divide(25, 5)).toEqual(5)
    })
    
    test('Should return num1 - num2', () => {
        expect(subtract(5, 5)).toEqual(0)
    })
})

test('to be true', () => {
    expect(truthy()).toBeTruthy()
})

// test('math funciton with string', () => {
//     expect(mathString(5, '5')).toEqual(10)
// })

// test('more args than params', () => {
//     expect(moreArgs('Hey', 'you', 'there', 'hi')).toEqual('Hey you there hi')
// })