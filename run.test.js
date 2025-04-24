const model = require("./run")

describe('concat', () => {
    test('GIVEN an array contains an object where id is 10 and name is Lucky, WHEN function is called,THEN it should return an additional key id_name containing 10 - Lucky', () => {

        //GIVEN
        let data = [
            {
                id: 10,
                name: "Lucky"
            }
        ]

        //WHEN
        const response = data.map(model.concat())

        //THEN
        expect(response[0]['id_name']).toBe('10 - Lucky')
    })
})

describe('addition', () => {
    test('GIVEN two numbers 10 and 20, WHEN function is called, THEN it should return 30', () => {

        //GIVEN
        const n1 = 10
        const n2 = 20

        //WHEN
        const result = model.addition(n1,n2)

        //THEN
        expect(result).toBe(30)
    })
})