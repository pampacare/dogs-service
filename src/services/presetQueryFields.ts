export const presetQueryFields = (object: Record<string, any>, validKeys: string[]): any => {
  if (!object) return object

  Object.keys(object).forEach(function (key) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    if (!validKeys.includes(key)) delete object[key]
  })

  return object
}
