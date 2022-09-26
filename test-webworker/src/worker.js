onmessage = (e) => {
  debugger
  console.log('%c 🍭', 'color:#7f2b82', `msg from main: ${e.data}`)
  postMessage('def')
}
