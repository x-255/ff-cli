export let bq = absPath => {
  let module = require(absPath)

  if (module.default) {
    return module.default
  }
  return module
}