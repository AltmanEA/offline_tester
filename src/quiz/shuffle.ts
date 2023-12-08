export function permutation(size: number, variant: number){
    const result = Array(size)
    const source = Array.from(result.keys())
    for(let i1=size-1; i1>0; i1--){
        const i2 = variant % (i1+1)
        result[i1]=source[i2]
        source.splice(i2, 1)
    }
    result[0]=source[0]
    return result
}