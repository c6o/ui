# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.0.4](https://github.com/c6o/node-monorepo/compare/v0.0.3...v0.0.4) (2020-08-23)


### ✨ Features

* **css:** App install animation and dialog styles ([#18](https://github.com/c6o/node-monorepo/issues/18)) ([c38a01c](https://github.com/c6o/node-monorepo/commit/c38a01c695d02460f4e0265691f2f426385f3f26))
* Added onOpened/onClose to SimpleDialog ([922dc43](https://github.com/c6o/node-monorepo/commit/922dc43193e1374c4c79f636749a5319bb85a425))
* allow Simple Dialog modal header to be custom rendered ([42bb3b0](https://github.com/c6o/node-monorepo/commit/42bb3b006cab35faf54f4ab951d4b13ac1335a39))


### 🐛 Bug Fixes

* **combobox:** Add autoformat to combobox to force lower or uppercase ([#16](https://github.com/c6o/node-monorepo/issues/16)) ([e34c348](https://github.com/c6o/node-monorepo/commit/e34c34811a3a275302aa8ae84a258d3151d508d2))
* **dialogs:** Change "forceRender" to "isStatic" and re-render the modal by default ([d9885c8](https://github.com/c6o/node-monorepo/commit/d9885c8f117d1e8fe2c5950b48bfe631aaed8ce9))
* **hub:** Ability to select marketplace category when editing an app ([#20](https://github.com/c6o/node-monorepo/issues/20)) ([ee5b215](https://github.com/c6o/node-monorepo/commit/ee5b215ca357d80c6db20b5f324f15bb4028da01))
* SimpleDialog inheristence ([c294639](https://github.com/c6o/node-monorepo/commit/c294639d50fb075f2271c96783413682951dc0e5))
* Type issues with simpleDialog ([8fbbe71](https://github.com/c6o/node-monorepo/commit/8fbbe718607a78ed8ec4d25f3333e0269b77c072))


### ♻️ Chores

* **marina:** Tweak to the dropdown menu styles ([#22](https://github.com/c6o/node-monorepo/issues/22)) ([3f39e6b](https://github.com/c6o/node-monorepo/commit/3f39e6b1e09b8ebf079061c59a8b8afaceabe678))
* Reverted to workspaces ([#19](https://github.com/c6o/node-monorepo/issues/19)) ([6e8bfa7](https://github.com/c6o/node-monorepo/commit/6e8bfa7db7510dbb5d7b58fd7e45926b46836651))
* Switch package keywords from traxitt to codezero ([#12](https://github.com/c6o/node-monorepo/issues/12)) ([ce69f30](https://github.com/c6o/node-monorepo/commit/ce69f30ec9a741460dadb8610840e8f35a89df29))
* **dialogs:** Add "render" to interface for type checking ([#15](https://github.com/c6o/node-monorepo/issues/15)) ([62de177](https://github.com/c6o/node-monorepo/commit/62de177379e2bc1608a79b678c50ba3cef5e6eab))
* Add blue "team" icon ([8e9a093](https://github.com/c6o/node-monorepo/commit/8e9a0934d1224a45c7fba66d3360a7edc4b07122))
* Add disconnectedCallback to SimpleDialog ([c4116a5](https://github.com/c6o/node-monorepo/commit/c4116a5a856e85feaa0758c2b2089c20841460b4))
* fix VSCode warning ([7d0184d](https://github.com/c6o/node-monorepo/commit/7d0184d12fdcaf1e7cacff08934a35534e7c7213))
* Some cleanup to dialogs and banners ([2e1c029](https://github.com/c6o/node-monorepo/commit/2e1c029f135dd2724f2ca82f7b17d6b61e3e8a22))





## 0.0.3 (2020-08-08)


### ✨ Features

* **dialogs:** Implement an error dialog that extends SimpleDialog ([#5](https://github.com/c6o/node-monorepo/issues/5)) ([a181880](https://github.com/c6o/node-monorepo/commit/a1818806331732004fa8a61de0e821170638d0f1))
* **icons:** Cloud installation status icons for Hub ([59e4866](https://github.com/c6o/node-monorepo/commit/59e4866181781c3acfae72d3475ca1eb887bda53))
* **marina:** Frontend work for Store app and System Info Dialog ([#655](https://github.com/c6o/node-monorepo/issues/655)) ([cadb2c2](https://github.com/c6o/node-monorepo/commit/cadb2c27c655d252c000f4a18ce438deed9e2877))
* **marina:** Marina desktop icons and dock styling ([#640](https://github.com/c6o/node-monorepo/issues/640)) ([87b5444](https://github.com/c6o/node-monorepo/commit/87b5444da1fa8a34508125e81210d3fa44ece23b))
* **marina:** Theme the Marina welcome/sign in screen ([#619](https://github.com/c6o/node-monorepo/issues/619)) ([443dde4](https://github.com/c6o/node-monorepo/commit/443dde4e07bd226c3c213c99dbe18c402af49f4d))
* **marina:** Theming Nav Station and Traxitt-System ([#643](https://github.com/c6o/node-monorepo/issues/643)) ([4fb42ad](https://github.com/c6o/node-monorepo/commit/4fb42ad4f8d3a3f45e38375dca7e3ec03624b79f))
* **marketplace:** UI work for the marketplace web component ([#2](https://github.com/c6o/node-monorepo/issues/2)) ([3b2839b](https://github.com/c6o/node-monorepo/commit/3b2839b45dc4d0daec6f573da7e6597bf1ca5dc1))
* **tooltip:** Create a tooltip reusable web component ([#8](https://github.com/c6o/node-monorepo/issues/8)) ([7c33117](https://github.com/c6o/node-monorepo/commit/7c3311771823490b8605c52b7ba4a6c97776bc9d))


### 🐛 Bug Fixes

* **ui:** Select form elements show current value properly ([#626](https://github.com/c6o/node-monorepo/issues/626)) ([32c71ca](https://github.com/c6o/node-monorepo/commit/32c71caa31bc2d1027c745a22edac6e69553396f))
* **validations:** App installation flow form validation for edition and namespace ([#659](https://github.com/c6o/node-monorepo/issues/659)) ([dcebff8](https://github.com/c6o/node-monorepo/commit/dcebff88cbb5e139dad0c560b70d46f3074952f1))


### ♻️ Chores

* Add licensing ([#11](https://github.com/c6o/node-monorepo/issues/11)) ([303063b](https://github.com/c6o/node-monorepo/commit/303063b1db1e77678d383c9e6a54a6319d9eb83d))
* Add TypeScript variables to some classes ([#4](https://github.com/c6o/node-monorepo/issues/4)) ([82456ed](https://github.com/c6o/node-monorepo/commit/82456ed7f620d8e7b2fc479d521d5c2996ea64cc))
* Ensure try/catch is logging exceptions ([#9](https://github.com/c6o/node-monorepo/issues/9)) ([ffffd5f](https://github.com/c6o/node-monorepo/commit/ffffd5f1c70c19ec40887a8d695464ff12100d0c))
* **responsive:** Some responsive styling ([cca99d9](https://github.com/c6o/node-monorepo/commit/cca99d9f6ce6fe293f4442dc34ffb46ae7bad643))
* Fixing path in references ([9c4ca4e](https://github.com/c6o/node-monorepo/commit/9c4ca4ed0fac74f9af547e1b5074a5bf789083de))
* Fixing some formatting ([1bebd8a](https://github.com/c6o/node-monorepo/commit/1bebd8aee2eddbc7e43907e686fea870c55301ed))
* Moved UI banners to this repo from Hub ([#1](https://github.com/c6o/node-monorepo/issues/1)) ([a913f0c](https://github.com/c6o/node-monorepo/commit/a913f0c4334a85851d3742caa328b64067be1247))
* Refactor packages from [@traxitt](https://github.com/traxitt) to [@c6o](https://github.com/c6o) ([#662](https://github.com/c6o/node-monorepo/issues/662)) ([e77933b](https://github.com/c6o/node-monorepo/commit/e77933b1439085da84f8dc4d5f2933ca2ba8713f))
* separated from node-monorepo ([55a7fed](https://github.com/c6o/node-monorepo/commit/55a7fedf5f634c20098f7d4cf089688065c95f59))
* Update lit-element and fix some VSCode warnings ([#6](https://github.com/c6o/node-monorepo/issues/6)) ([bc49d0b](https://github.com/c6o/node-monorepo/commit/bc49d0bbdd96484357b86f09bd074fd602369b11))
* **release:** v0.0.1 ([5a30533](https://github.com/c6o/node-monorepo/commit/5a3053354fde4435bc254ab165bb5f237ccee9f6))
* **release:** v0.0.2 ([0e95d22](https://github.com/c6o/node-monorepo/commit/0e95d2241140de651761392a5a5618e717dc221a))
* **rename:** Rename all web components to use c6o instead of traxitt ([#653](https://github.com/c6o/node-monorepo/issues/653)) ([7907684](https://github.com/c6o/node-monorepo/commit/790768455c3502618a87b8f6296369de1825dd87))
* **resources:** Separating people endpoints ([#608](https://github.com/c6o/node-monorepo/issues/608)) ([5ade137](https://github.com/c6o/node-monorepo/commit/5ade1373427438dd87f71f217d1cbc45ad109dbd))
* **version:** Reset all versions and added versioning to CI, hub and system ([#603](https://github.com/c6o/node-monorepo/issues/603)) ([4242cb2](https://github.com/c6o/node-monorepo/commit/4242cb255e878eb7d6eb9dfddf1713f9e33bc65c))





## [0.0.2](https://github.com/traxitt/node-monorepo/compare/v0.0.1...v0.0.2) (2020-07-17)


### ✨ Features

* **marina:** Marina desktop icons and dock styling ([#640](https://github.com/traxitt/node-monorepo/issues/640)) ([68559b8](https://github.com/traxitt/node-monorepo/commit/68559b8dc833781f7c78d458af0a376029f8de0c))
* **marina:** Theme the Marina welcome/sign in screen ([#619](https://github.com/traxitt/node-monorepo/issues/619)) ([071b54d](https://github.com/traxitt/node-monorepo/commit/071b54d730cb671c7be2669cf829d87d4e669fde))


### 🐛 Bug Fixes

* **ui:** Select form elements show current value properly ([#626](https://github.com/traxitt/node-monorepo/issues/626)) ([fd93d20](https://github.com/traxitt/node-monorepo/commit/fd93d20d3ac9a7f89a67c4c961eba144e25a3290))


### ♻️ Chores

* **resources:** Separating people endpoints ([#608](https://github.com/traxitt/node-monorepo/issues/608)) ([8c5a0df](https://github.com/traxitt/node-monorepo/commit/8c5a0df05131d30057a78afce8ac529f298757ad))





## [0.0.1](https://github.com/traxitt/node-monorepo/compare/v0.0.0...v0.0.1) (2020-07-07)

**Note:** Version bump only for package @c6o/ui-web
