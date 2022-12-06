# React Native Expo app with Firebase analytics

This app is written by [React Native](https://reactnative.dev/docs/environment-setup) and using [Expo](https://docs.expo.dev/get-started/installation/) to build the react native app

---

Typescript version expo is [here](https://docs.expo.dev/guides/typescript/)

## Local Development

To start developing locally, please follow the below steps.

1. Clone the git repository and install the npm packages.

2. Create a project in [Firebase console](https://console.firebase.google.com/u/0/). Full Step is [here](https://cloud.google.com/firestore/docs/client/get-firebase).

   P.S need to enable Goggle Analytics for the project

3. If you are building iOS or using iOS simulator --> create iOS app in the created Firebase project. So as Android app.

4. Download the `GoogleService-info.plist` (iOS)/ `google-services.json` (Android) file and put in the root.

5. Update the `app.json` file like this

   ```
   {
    "expo": {
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "googleServicesFile": "./google-services.json"
    },
    "web": {
      "config": {
        "firebase": {
          "apiKey": "AIzaXXXXXXXX-xxxxxxxxxxxxxxxxxxx",
          ...
          "measurementId": "G-XXXXXXXXX"
        }
      }
    }
   }
   }
   ```

6. (Optional) Enable the debug mode [Reference](https://firebase.google.com/docs/analytics/debugview)

   **iOS device**

   Open Xcode -> Choose Product -> Scheme -> Edit scheme

   Add `-FIRDebugEnabled` in `Arguments Passed On Launch`

   P.S you may need to rebuild the app if the debug view is not working

7. Build the app by [EAS build](https://docs.expo.dev/build/introduction/)

   **Install the latest EAS CLI**

   ```bash
   npm install -g eas-cli
   ```

   ```bash
   eas login
   ```

   ```bash
   eas build:configure
   ```

   Build with Android

   ```bash
   eas build --platform android
   ```

   Build with iOS

   ```bash
   eas build -platform ios
   ```

   OR build fro both Android and iOS

   ```bash
   eas build --platform all
   ```

8. Run the build

   ```bash
   expo run
   ```
