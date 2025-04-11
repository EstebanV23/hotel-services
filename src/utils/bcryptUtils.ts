import bcrypt from 'bcrypt'

const salt = 10

export const hashPassword = async ({
  password
}: {
  password: string
}): Promise<string | null> => {
  try {
    const saltGenerated = await bcrypt.genSalt(salt)
    const hash = await bcrypt.hash(password, saltGenerated)
    return hash
  } catch (error) {
    console.error('Error al hashear la contraseña')
    console.error(error)
    return null
  }
}

export const comparePassword = async ({
  password,
  hash
}: {
  password: string
  hash: string
}): Promise<boolean> => {
  try {
    const compare = await bcrypt.compare(password, hash)
    return compare
  } catch (error) {
    console.error('Error al comparar la contraseña')
    console.error(error)
    return false
  }
}
