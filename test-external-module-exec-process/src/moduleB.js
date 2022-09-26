let moduleB = 'moduleB'
const shouldBeShook = 'should be shook' + Math.random()
setTimeout(() => {
  moduleB = shouldBeShook
}, 10)

export { moduleB }
export { shouldBeShook }
