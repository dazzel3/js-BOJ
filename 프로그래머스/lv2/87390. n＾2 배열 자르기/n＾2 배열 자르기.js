function solution(n, left, right) {
    let result = []
    for (let i=left; i<=right; i++) {
        result.push(Math.max(parseInt(i/n), i%n)+1)
    }
    return result
}