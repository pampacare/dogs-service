export const convertToBoolean = (object: any, param: string): any => {
  if (!object || !object[param]) return object
  object[param] = Boolean(object[param] === 'true') ?? false
  return object
}
