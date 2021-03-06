## How to run
In terminal, run the following commands.
1. `git clone https://github.com/lalapro/GGUncle.git`
2. `cd GGUncle`
3. `npm install`
4. Follow the steps for your preferred device/simulator



## iPhone (XCode must be installed for this command to work)

To run simulator, type in the following in the terminal:
`npm run iPhone8` or `npm run iPhone8Plus`

## Troubleshooting (iPhone)
##### No Bundle Url Present

`Fix` -> keep simulator running, in another terminal instance run `npm install` again, then run `npm run iPhone8` when install is finished

##### Simulator not showing up even after load successful
`Fix` -> On Mac, cmd + space and type in simulator, it should show up with the app loaded

## Android
1. start up your choice of simulator (I used genymotion)
2. When simulator is up, type the following in the terminal:
`npm run android`

* Simulator **must(!)** be loaded before running the command, application should load straight into open simulator

## Troubleshooting (Android)

##### `unable to load script from assets index.android.bundle`
`Fix` -> (paste the following in project directory)

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

then run the command `npm run android` again.

* If on Android SDK, go to Tools -> Android -> Sync Project with Gradle Files before clicking Run

# Important!!!!

* For android simulator, please go to `Dev Settings` and UNCHECK `JS Dev Mode`, else the application will be *very* laggy. Checkout screenshots for how to access it.

* The search icon and the home icon route to the same screen

* To login, please click on the text "Phone number" or the phone icon


## Screenshots

<div style="width:100%">
  <img src="https://i.imgur.com/VjVbbLk.png" width="20%"/>
  <img src="https://i.imgur.com/HO6lgEk.png" width="20%"/>
  <img src="https://i.imgur.com/ZHlDOzp.png" width="20%"/>
  <img src="https://i.imgur.com/4S8tBxK.png" width="20%"/>
  <img src="https://i.imgur.com/tUOPelC.png" width="20%"/>
</div>
