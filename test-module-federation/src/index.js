console.log('%c 🍡', 'color:#ffdd4d', 123)
function runRemote() {
  import('providerApp/index').then((res) => {
    debugger
  })
}
runRemote()
