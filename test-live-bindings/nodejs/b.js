const obj = { x: 0 }
let x = 0
const changeX = () => {
  obj.x = 1
  x = 1
}
module.exports = {
  obj,
  x,
  changeX
}