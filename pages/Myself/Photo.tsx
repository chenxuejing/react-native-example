import React, { Component, createRef } from 'react'
import { Text, View, Image, TouchableOpacity, Button } from 'react-native'

import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


export interface AppProps {
}

export interface AppState {
  hasCameraPermission?: any,
  type?: any,
  isShowCamera: Boolean,
  uri: string
}

export default class Myself extends Component<AppProps, AppState> {
  constructor(props: AppProps, public camera) {
    super(props);
    this.camera = createRef()
  }
  state = {
    hasCameraPermission: null,              //照相机权限
    type: Camera.Constants.Type.back,       //照相机类型
    isShowCamera: false,                    //是否开启照相机
    uri: ''
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);//获取expo-camera相机权限
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  //点击拍照的函数
  takePicture() {
    this.setState({
      isShowCamera: true
    })
  }

  public render() {
    return (
      <View style={{
        width: '100%',
        paddingTop: 40,
        paddingBottom: 40
      }}>
        {
          !this.state.isShowCamera ?
            <View style={{ alignItems: 'center' }}>
              <View>
                {
                  this.state.uri !== '' && <Image source={{ uri: this.state.uri }} style={{ width: 220, height: 305, marginBottom: 40 }}></Image>
                }
              </View>
              <Text onPress={this.takePicture.bind(this)} style={{ width: '90%', height: 50, backgroundColor: 'orangered', fontSize: 24, textAlign: 'center', color: '#FFF', fontWeight: 'bold', lineHeight: 50, borderRadius: 10 }}>拍照</Text>
            </View> :
            <Camera
              style={{
                width: '100%',
                height: 667,
              }}
              type={this.state.type}
              ref={(el: any) => this.camera = el}      //参照官网的Methods
            >
              <View
                style={{
                  width: '100%',
                  height: 667,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: 50,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
                {/* 复制一个开始拍照的点击按钮 */}
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: 50,               //flex为0.1改成flex为1
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  //参照官网的Methods
                  onPress={async () => {
                    if (this.camera) {
                      let photo = await this.camera.takePictureAsync();
                      this.setState({
                        isShowCamera: false,
                        uri: photo.uri
                      })
                    }
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}开始拍照{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
        }
      </View>
    );
  }
}
