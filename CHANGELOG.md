# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.0.2](https://github.com/traxitt/node-monorepo/compare/v0.0.1...v0.0.2) (2020-07-17)


### ✨ Features

* **marina:** Added the Dock to the Marina ([#635](https://github.com/traxitt/node-monorepo/issues/635)) ([e07ab5d](https://github.com/traxitt/node-monorepo/commit/e07ab5d98a347a2160f780b0f7bf399d7c6624dd))
* **marina:** Marina desktop icons and dock styling ([#640](https://github.com/traxitt/node-monorepo/issues/640)) ([68559b8](https://github.com/traxitt/node-monorepo/commit/68559b8dc833781f7c78d458af0a376029f8de0c))
* **marina:** System summary in System Info menu ([#637](https://github.com/traxitt/node-monorepo/issues/637)) ([9e2978a](https://github.com/traxitt/node-monorepo/commit/9e2978a19b82eec3513adf10e1e53779b876ebb1))
* **marina:** Theme the Marina welcome/sign in screen ([#619](https://github.com/traxitt/node-monorepo/issues/619)) ([071b54d](https://github.com/traxitt/node-monorepo/commit/071b54d730cb671c7be2669cf829d87d4e669fde))
* **metrics:** Metrics for data collection and analysis. [#427](https://github.com/traxitt/node-monorepo/issues/427) ([#611](https://github.com/traxitt/node-monorepo/issues/611)) ([82141da](https://github.com/traxitt/node-monorepo/commit/82141da4c89e16dfaf4f6278779b922db1150fc8))
* **tools:** Added czdev CLI tool for easier local debugging. Added OAuth icons to assets ([#628](https://github.com/traxitt/node-monorepo/issues/628)) ([da4d2ac](https://github.com/traxitt/node-monorepo/commit/da4d2ac2fb8f0c46565f0cffd263a5fe5421008b))
* **update:** Ability to update System and all other Apps ([#615](https://github.com/traxitt/node-monorepo/issues/615)) ([baf21fd](https://github.com/traxitt/node-monorepo/commit/baf21fdeb45c64b919cb052a1bdd8e242cdac117))


### 🐛 Bug Fixes

* Fixes based on regression testing ([5a02c9e](https://github.com/traxitt/node-monorepo/commit/5a02c9ec216b0fe8a73d8d51883e9caa45be3854))
* **czdev:** Fixed compile error - removed custom.ts ([3a89b0f](https://github.com/traxitt/node-monorepo/commit/3a89b0f4a650799e34498d21ccfe3b9e724bf6a6))
* **digitalocean:** Digitalocean install job security and error handling issues ([09daafe](https://github.com/traxitt/node-monorepo/commit/09daafeb3fcc68d2dec2073b7bcb0751d5cc2113))
* **digitalocean:** Removed hard coded k8s version ([de7f298](https://github.com/traxitt/node-monorepo/commit/de7f298d12f0a2d69f48166ba993b88593a96418))
* **logging:** Only enable full color when in non-prod env ([#632](https://github.com/traxitt/node-monorepo/issues/632)) ([df98e34](https://github.com/traxitt/node-monorepo/commit/df98e341254aa32843cc69c4254f4823a6a38a2a))
* **login:** Fixed infinite loading issue in Marina ([4b4b4f5](https://github.com/traxitt/node-monorepo/commit/4b4b4f55b63f452d921639ed6cd3c0d904e6bc93))
* **MeStore:** Change MeStore to inherit from AccountsStore ([#631](https://github.com/traxitt/node-monorepo/issues/631)) ([593cae8](https://github.com/traxitt/node-monorepo/commit/593cae844255145d1524556e63b714b4cbd7842f))
* **metrics:** Added support for jws. Updated README ([#622](https://github.com/traxitt/node-monorepo/issues/622)) ([8061cce](https://github.com/traxitt/node-monorepo/commit/8061ccebdec696834b28cfdef437bf6bbf6926f4))
* **oauth:** Fixed codezero OAuth iconURL ([e990de1](https://github.com/traxitt/node-monorepo/commit/e990de1c05db8775c03cce997e64782dac37224b))
* **redact:** Fixed redaction build errors ([b23f930](https://github.com/traxitt/node-monorepo/commit/b23f930546f935cbc46818e6c434e01b54c80ca9))
* **store:** Sign-in screen logic ([06b77c2](https://github.com/traxitt/node-monorepo/commit/06b77c2a5f73d24426cae653e22db492fb1243c4))
* **system:** CLI incorrect hub domain and added verdaccio ([82c98a5](https://github.com/traxitt/node-monorepo/commit/82c98a56f29c40d27c6efe3ccad034f9d153cb77))
* **ui:** Cloud grid refresh issue ([488738d](https://github.com/traxitt/node-monorepo/commit/488738d2eaa8acb4893bbf881e913d385919ea4d))
* **ui:** Select form elements show current value properly ([#626](https://github.com/traxitt/node-monorepo/issues/626)) ([fd93d20](https://github.com/traxitt/node-monorepo/commit/fd93d20d3ac9a7f89a67c4c961eba144e25a3290))
* Minor install errors ([e2fe0d0](https://github.com/traxitt/node-monorepo/commit/e2fe0d08b04b811034555b2d1be9f9fc0950a889))
* **validation:** Incorrect validation error when link token is null ([f2332b3](https://github.com/traxitt/node-monorepo/commit/f2332b351ef690692c5f1869f2e44a8d01d2d75e))


### ♻️ Chores

* **build:** Added develop.hub.codezero.io ([#609](https://github.com/traxitt/node-monorepo/issues/609)) ([9876891](https://github.com/traxitt/node-monorepo/commit/987689157052b0e50581aaea35fe9b3fc6b0bf46))
* **build:** Automated deploy to develop and staging on dragon/canary builds ([#618](https://github.com/traxitt/node-monorepo/issues/618)) ([266e90b](https://github.com/traxitt/node-monorepo/commit/266e90bd1edf300f6d56e068de8afd263163a92f))
* **canary:** Updated secrets and staging to use codezero.io/cloud ([289b95d](https://github.com/traxitt/node-monorepo/commit/289b95d7c59c0539aaba2717bc4cbf2d117119bd))
* **common:** redaction ([#620](https://github.com/traxitt/node-monorepo/issues/620)) ([a72e0ca](https://github.com/traxitt/node-monorepo/commit/a72e0ca835a8d5f1b15e5b9a000373eda7009f29))
* **common:** Separated out server-common from common ([#634](https://github.com/traxitt/node-monorepo/issues/634)) ([5259e02](https://github.com/traxitt/node-monorepo/commit/5259e02b88657179255ea37bc8164f5a2f46d440))
* **resources:** Separating people endpoints ([#608](https://github.com/traxitt/node-monorepo/issues/608)) ([8c5a0df](https://github.com/traxitt/node-monorepo/commit/8c5a0df05131d30057a78afce8ac529f298757ad))





## [0.0.1](https://github.com/traxitt/node-monorepo/compare/v0.0.0...v0.0.1) (2020-07-07)


### 🐛 Bug Fixes

* **packages:** Missing reference to [@traxitt](https://github.com/traxitt)/hub-common ([98b3f6d](https://github.com/traxitt/node-monorepo/commit/98b3f6d538baa3baf95668049a3d6100ad83686d))


### ♻️ Chores

* **kubeclient:** Split kubeclient and provisioners from pub-packages ([10b74ec](https://github.com/traxitt/node-monorepo/commit/10b74ecfa93365fdb7b6e880642d4477b19ecee9))
