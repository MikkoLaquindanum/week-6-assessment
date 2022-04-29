const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffle array should return array',  () => {
        let shuffledArray = shuffleArray(testData.array)
        expect(shuffledArray).toBe()
    })
})

it('should return array of the same length as  the argument',  () => {
    let result =  convertLength(testData.length)
    expect(result).toHaveLength(2)
})