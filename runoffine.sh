#!/bin/bash
React-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.jsbundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
cd ./android&&./gradlew assembleRelease
cd ./app/build/outputs/apk/ &&adb install -r ./app-release.apk&&adb shell am start -n com.reviewrn.pain/com.reviewrn.pain.MainActivity