
# react-native-xyj-baidu

## Getting started

`$ npm install react-native-xyj-baidu --save`

### Mostly automatic installation

`$ react-native link react-native-xyj-baidu`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-xyj-baidu` and add `RNXyjBaidu.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNXyjBaidu.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.kll.basiclayout.RNXyjBaiduPackage;` to the imports at the top of the file
  - Add `new RNXyjBaiduPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-xyj-baidu'
  	project(':react-native-xyj-baidu').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-xyj-baidu/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-xyj-baidu')
  	```


## Usage
```javascript
import RNXyjBaidu from 'react-native-xyj-baidu';

// TODO: What to do with the module?
RNXyjBaidu;
```
  