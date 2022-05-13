const {shuffleArray} = require('./utils')

// let testArray = [1,2,3,4]

// describe('shuffleArray should', () => {
//     test('shuffle array should return array',  () => {
//         let shuffledArray = shuffleArray(Array.isArray)
//         expect(shuffledArray).toBe(true)
//     })
// })

// it('should return array of the same length as  the argument',  () => {
//     let result =  shuffleArray(testArray.length)
//     expect(result).toHaveLength(4)
// })

let testArr = [1, 2, 3, 4]

describe ('shuffleArray should', () => {

    test('check if shuffle returns an array', () =>{
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    it('should check that it returns array same lenght of arguement', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
    
    it('should check that all the same items are in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })

    it('should check that the items have been shuffled around', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
})