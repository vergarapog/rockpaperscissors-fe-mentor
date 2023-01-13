export const sum = (numbers) => {
  return numbers.reduce((accu, curr) => {
    return accu + curr
  }, 0)
}
