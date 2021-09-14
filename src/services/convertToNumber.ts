export const convertToNumber = (object: any, param: string): any => {
  if (!object || !object[param]) return object
  object[param] = Number(object[param])
  return object
}
