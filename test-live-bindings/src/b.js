let x = 0
const obj = { x }
export { obj, x }
export const changeX = () => {
  obj.x = 1
  x = 1
}