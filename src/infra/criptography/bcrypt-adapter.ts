import bcrypt from 'bcrypt'

import { Encrypter } from './../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: any): Promise<string> {
    const encryptedValue = await bcrypt.hash(value, this.salt)
    return encryptedValue
  }
}
