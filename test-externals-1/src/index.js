import _ from 'lodash/lodash'

console.log('%c 🍔', 'color:#ffdd4d')
document.body.innerText = JSON.stringify(_.cloneDeep({ a: 1 }))
