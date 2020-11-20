# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/elissonalvesilva/clean-node-api/compare/v1.1.0...v1.1.1) (2020-11-20)

## 1.1.0 (2020-11-20)


### Features

* add express route adapter ([b08ed49](https://github.com/elissonalvesilva/clean-node-api/commit/b08ed49777384ce18dc207f082e0ef50a84c2e6f))
* add git commit linter ([8490da9](https://github.com/elissonalvesilva/clean-node-api/commit/8490da92ae557bf88af4ec6049b5d50cfd324e98))
* add LogMongoRepository to a factory ([96a1e66](https://github.com/elissonalvesilva/clean-node-api/commit/96a1e6696b8e44cb8c99c1b5815148d3b67ca911))
* add npm ([b6f0c22](https://github.com/elissonalvesilva/clean-node-api/commit/b6f0c22a85f1b64577673c0770f21a2b78292f52))
* connect to mongodb before app listen ([0b36b0e](https://github.com/elissonalvesilva/clean-node-api/commit/0b36b0e99001a29c7fc74aec64a70396d747694a))
* create a Log decorator method ([02dd1be](https://github.com/elissonalvesilva/clean-node-api/commit/02dd1be1c9d1d004b50d6aa8570b7efcbe1f39d8))
* ensure AccountMongoRepository an account on success ([e4e72bc](https://github.com/elissonalvesilva/clean-node-api/commit/e4e72bc9bfbef31e95e89339e590e27d410e7cf1))
* ensure BcryptAdapter calls bcrypt with correct values ([3bcb7ba](https://github.com/elissonalvesilva/clean-node-api/commit/3bcb7ba8ba29d00a0affba67028cba44aaf4ed12))
* ensure cors is enabled ([9888270](https://github.com/elissonalvesilva/clean-node-api/commit/9888270e3b17b80b91175247f04a38f2f59c4e2a))
* ensure DbAddAccount calls AddAccountRepository with correct values ([0eee890](https://github.com/elissonalvesilva/clean-node-api/commit/0eee89082faeb7dbe73fe1ad5be3486437b3cdd3))
* ensure DbAddAccount calls encrypter with correct password ([385433a](https://github.com/elissonalvesilva/clean-node-api/commit/385433acb615313d8670ddd6b3211f60c026268c))
* ensure DbAddAccount returns an account on success ([65ce75b](https://github.com/elissonalvesilva/clean-node-api/commit/65ce75b7d9179dd60a09afcf88c9dc74979bbcb4))
* ensure EmailValidatorAdapter returns false if validator returns false ([6e822db](https://github.com/elissonalvesilva/clean-node-api/commit/6e822dbaf904e3e19f02d11c65806fd1fe5b98c9))
* ensure EmailValidatorAdapter returns true if validator returns true ([0bc2dca](https://github.com/elissonalvesilva/clean-node-api/commit/0bc2dca767ae4e78a7d4578b4022adc7e53b2df4))
* ensure ExpressRoutesAdapter returns the error message instead of the error name ([06e41aa](https://github.com/elissonalvesilva/clean-node-api/commit/06e41aac69930cf7430755ec3ab1b1cc68f33504))
* ensure LogControllerDecorator calls LogErrorRepository if controller returns a server error ([0227151](https://github.com/elissonalvesilva/clean-node-api/commit/02271511a090c5ef005210736fb7e3e6fb7a1873))
* ensure LogControllerDecorator return the same result of the controlle ([111eb86](https://github.com/elissonalvesilva/clean-node-api/commit/111eb86255036dd1f52da33174139bdea7d263f5))
* ensure LogMongoRepository creates an error log on success ([3f6ff19](https://github.com/elissonalvesilva/clean-node-api/commit/3f6ff192b3c516fd0fa141662ea088a28a388e9d))
* ensure Mongodb reconnect if client is down ([a10b1ad](https://github.com/elissonalvesilva/clean-node-api/commit/a10b1ad55ebed0cb61baa7858157a93aad56cc65))
* ensure parser body as json ([be88080](https://github.com/elissonalvesilva/clean-node-api/commit/be88080aa12e0a8043d4a7ebb75709164254419c))
* ensure requests return json to content type ([a229734](https://github.com/elissonalvesilva/clean-node-api/commit/a2297344327eec29ac77a068d1ca9e763d179dbe))
* ensure sign controlle return 400 if no name is provided ([21e3c9b](https://github.com/elissonalvesilva/clean-node-api/commit/21e3c9bd095a8b56bb2660a7e2b3822689a89ee2))
* ensure SignUpController calls AddAccount with correct values ([5b63aaf](https://github.com/elissonalvesilva/clean-node-api/commit/5b63aafa5a18781b3f22f0f15a8564cdaa61eb1c))
* ensure SignUpController return 400 if no password confirmation is provided ([8891ec7](https://github.com/elissonalvesilva/clean-node-api/commit/8891ec7e1e717a40edd06cf054354e650f19820d))
* ensure SignUpController return 400 if no password is provided ([264bfb8](https://github.com/elissonalvesilva/clean-node-api/commit/264bfb892458fb8d5406fefc7c7dcca16d07c70a))
* ensure SignUpController return 400 if password confirmation fails ([ddc4dda](https://github.com/elissonalvesilva/clean-node-api/commit/ddc4ddac571743c0fab34c0b732caeaf97b44a9e))
* ensure SignUpController return 500 if EmailValidator throws ([a6cc4f5](https://github.com/elissonalvesilva/clean-node-api/commit/a6cc4f5d65e35090bfe84398452a2119f7e2f4fa))
* ensure SignUpController returns 200 with valid data is provided ([e2231b2](https://github.com/elissonalvesilva/clean-node-api/commit/e2231b20b5ba93933e19b3f27996782856d7defe))
* ensure SignUpController returns 400 if an invalid email is provided ([512ee85](https://github.com/elissonalvesilva/clean-node-api/commit/512ee859887828e03bd28156dfd1b52063a8c941))
* ensure signUpController returns an error if no names is provided ([c4c4919](https://github.com/elissonalvesilva/clean-node-api/commit/c4c4919516c368f58101fb7338cd5644a0e039a7))
* ensure SignUpRoute returns an account on success ([b9bcc5c](https://github.com/elissonalvesilva/clean-node-api/commit/b9bcc5c0f27ba5ddbb1b1e03a040567a46c0c6d5))
