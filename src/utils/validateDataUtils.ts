export function validateData (data: String | number | object | boolean | any[] | undefined | null): boolean {
  let validate = data !== null && data !== undefined

  if (typeof data === 'string') {
    validate = validate && data.trim() !== ''
  }

  if (typeof data === 'boolean') {
    validate = validate && data
  }

  if (Array.isArray(data)) {
    validate = validate && data.length > 0
  }

  return validate
}
