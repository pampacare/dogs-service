export function validateName (name: string): boolean {
  var regName = /^[a-zA-Z\u00C0-\u00FF\s]+$/
  if (!(typeof name === 'string')) {
    return false
  }
  var isEmpty = name.trim()
  if (!regName.test(name) || !isEmpty || name.length < 3) {
    return false
  }
  return true
}
