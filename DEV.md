# 👩‍💻👨‍💻 Development

Below described how to get up and running for `mobile`, `backend` and `web` in respective order.

# Mobile

To get up and running on mobile development follow the steps below and it'll get you there.

## Setup

### Prerequisites

If on MacOS run the following commands, after installing [brew](https://brew.sh/):
```bash
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
npm install -g react-native-cli
```

Install [Xcode](https://developer.apple.com/xcode/) (version 9.4 or newer) and [NodeJS](https://nodejs.org/en/) (latest version), a nice little tool for node version management is `nvm`. We use `yarn` as our dependency manager.

After installing Xcode on your system use [this step](https://facebook.github.io/react-native/docs/getting-started#xcode) to add command line tools to your system.

When finished with all previous steps run the following (assuming you're located in the root of the project folder):
```bash
cd mobile
yarn
```
This will install all dependencies you need to run the consequent sections.

### iOS

Run `yarn ios` to start compiling IOS native code and start a dev server with an emulator. If there's no need to compile native code (in general, that's the case) and run a simulator just run `yarn start` to start the dev server. You can also run the app on [an iPhone](https://facebook.github.io/react-native/docs/running-on-device)

Note:
When using iTerm (or anything but the default macOS Terminal) `yarn ios` will run the server in the macOS Terminal. If you want it to run in your terminal of choice close the Terminal and run `yarn start` in your terminal. After that you're good to go! To get rid of this behavior follow [this stackoverflow answer](https://stackoverflow.com/a/37815748)

### Android

To be written.

### **Commands**

#### `yarn start`

Starts a simple dev server that compiles and servers JS bundles. Simulators can connect to this and request new bundles through this server

#### `yarn ios`

Compiles native code and launches an IOS simulator + a dev server to start developing on your machine.

#### `yarn test`

Runs all tests picked up by jest

#### `yarn eslint`

Linting tool for the written code

# Backend

Yet to be written