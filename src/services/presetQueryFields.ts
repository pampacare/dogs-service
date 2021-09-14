// Ignored error because we need delete key dinamically
/* eslint-disable @typescript-eslint/no-dynamic-delete */

export const presetQueryFields = (object: Record<string, any>, validKeys: string[]): any => {
  if (!object) return object

  Object.keys(object).forEach(function (key) {
    if (!validKeys.includes(key)) delete object[key]
  })

  return object
}
