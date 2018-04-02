/**
* Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Camera from 'react-native-camera';
export default class App extends Component { 
  constructor(props) { 
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    };

    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    //jpegQuality 1-100, 压缩图片
    const options = { jpegQuality: 50 };

    this.camera.capture({options})
    .then((data) =>{
      console.log(data);

      /*图片本地路径*/
      this.setState({
          imagePath: data.path,
      });

      /*获取图片大小*/
      Image.getSize(data.path,(width,height) =>{
          console.log(width,height);
      });

    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam }}
          // Camera.constants.CaptureTarget.cameraRoll (default), 相册
          // Camera.constants.CaptureTarget.disk, 本地
          // Camera.constants.CaptureTarget.temp  缓存
          // 很重要的一个属性，最好不要使用默认的，使用disk或者temp，
          // 如果使用了cameraRoll，则返回的path路径为相册路径，图片没办法显示到界面上
          captureTarget={Camera.constants.CaptureTarget.temp}
          mirrorImage={false}
          //"high" (default),"medium",  "low",  "photo", "1080p",  "720p",  "480p".
          //captureQuality="medium"
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >

        <Text style={styles.capture} onPress={this.takePicture}>[点击拍照]</Text>

        {/* 拍照完毕，显示图片到界面上 */}
        <Image 
          style={{width: 100, height: 100, marginBottom: 20}} 
          source={{uri: this.state.imagePath}} 
        />
        </Camera>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
  },
  preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
  }
});