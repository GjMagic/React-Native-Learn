# RN打包命令总结

### 1、打离线android包

> react-native bundle --entry-file index.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/assets/src/images/

> * react-native bundle / react-native打包命令
> * --entry-file index.js / 入口文件是index.js
> * --platform android / 设备为android
> * --dev false / 是否为开发环境--否
> * --bundle-output / 打包出口文件位置 android/app/src/main/assets/index.android.bundle
> * --assets-dest / 资源存储位置android/app/src/main/assets/src/images/

### 2、打离线ios包

> 1、将AppDelegate.m文件的**开发环境**代码注释，放开**生产环境**代码
> 2、在项目的ios文件夹里新建bundle文件夹，退至项目根目录执行npm run ios打包ios代码
> 3、将bundle文件夹里的内容全部拖至Xcode中的app文件夹下
> 4、选择手机进行打包即可

### 3、打本地包
> * react-native run-android (android)
> * react-native run-ios (ios)