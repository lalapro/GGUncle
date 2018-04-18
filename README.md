## How to run
In terminal, run the following commands.
1. `git clone https://github.com/lalapro/GGUncle.git`
2. `cd GGUncle`
3. `npm install`



## iPhone
(Assuming xCode is installed)

`npm run iPhone8` or `npm run iPhone8Plus`

## Troubleshooting (iPhone)
##### No Bundle Url Present

`Fix` -> keep simulator running, in another terminal instance run `npm install` again, then run `npm run iPhone8` when install is finished

##### Simulator not showing up even after load successful
`Fix` -> On Mac, cmd + space and type in simulator, it should show up with the app loaded

## Android
1. start up simulator (I used genymotion)
`npm run android`

## Troubleshooting (Android)

##### `unable to load script from assets index.android.bundle`
`Fix` -> (paste the following in project directory)

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

then `npm run android`

#### Important
* Simulator must be loaded before running the command, app should load straight into simulator

* If on Android SDK, go to Tools -> Android -> Sync Project with Gradle Files

* Click Run 'App', choose the deployment target and press Ok.


## Screenshots

<div style="width:100%">
  <img src="https://i.imgur.com/WBv4dxA.gifv" width="20%"/>
  <img src="https://i.imgur.com/VjVbbLk.png" width="20%"/>
  <img src="https://i.imgur.com/HO6lgEk.png" width="20%"/>
  <img src="https://i.imgur.com/ZHlDOzp.png" width="20%"/>
</div>
