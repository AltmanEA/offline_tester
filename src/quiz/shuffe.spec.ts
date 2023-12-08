import { permutation } from "./shuffle"

test("Permutation", ()=>{
    expect(permutation(4, 1)).toStrictEqual([0, 3, 2, 1])
    expect(permutation(4, 2)).toStrictEqual([1, 0, 3, 2])
    expect(permutation(4, 3)).toStrictEqual([1, 2, 0, 3])
    expect(permutation(4, 5)).toStrictEqual([0, 2, 3, 1])    
})

