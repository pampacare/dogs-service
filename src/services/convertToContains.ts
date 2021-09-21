export const convertToContains = (object: any, keys: string[]): any => {
  if (!object) return object

  keys.forEach((key: any) => {
    if (key in object) {
      object[key] = { contains: object[key], mode: 'insensitive' }
    }
  })

  return object
}
