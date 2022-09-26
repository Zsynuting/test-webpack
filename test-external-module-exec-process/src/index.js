import { moduleB } from './moduleB'
const moduleAImporter = import('./moduleA')

console.log('%c 🍔 name', 'color:#f5ce50', moduleB)
moduleAImporter.then((module) => {
  console.log('%c 🥃', 'color:#42b983', module.default)
})

