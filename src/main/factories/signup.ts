import { Controller } from './../../presentation/protocols/controller'
import { AccountMongoRepository } from './../../infra/db/mongodb/account-repository/account'
import { BcryptAdapter } from './../../infra/criptography/bcrypt-adapter'
import { EmailValidatorAdapter } from './../../utils/email-validator-adapter'
import { DbAddAccount } from './../../data/usecases/add-account/db-add-account'
import { SignUpController } from './../../presentation/controllers/signup/signup'
import { LogControllerDecorator } from '../decorators/log'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(emailValidator, dbAddAccount)
  return new LogControllerDecorator(signUpController)
}
