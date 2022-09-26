const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' })
worker.onmessage = (e) => {
  console.log('%c 🧀', 'color:#4fff4B', `msg from worker: ${e.data}`)
}
worker.postMessage('abc')
