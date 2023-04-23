ESModule 的 Live Bindings 有以下特性

```
import { obj, x, changeX } from './b.mjs'

console.log(x)
console.log(obj.x)
changeX()
console.log(x)
console.log(obj.x)

// b.mjs
let x = 0
const obj = { x }

export { obj, x }
export const changeX = () => {
  obj.x = 1
  x = 1
}
```

以上代码将会打印
```
0
0
1
1
```

验证发现
webpack的module 符合ESModule Live Bindings的特性