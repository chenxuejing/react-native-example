import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { get } from "../../utils/http.js"
import { Icon } from '@ant-design/react-native';

import { NavigationUtils } from './../../utils/NavigationUtils';
import icon from '../../assets/images/icon.png'
export interface AppProps {
}

export interface AppState {
  data: any
}

export default class Maylike extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  state = {
    data: null
  };
  async componentDidMount() {
    let result = await get("http://123.57.64.216:9000/api/maylike")
    this.setState({
      data: result,
    })
  }

  public render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Image source={icon} style={{ width: 20, height: 20 }}></Image>
          <Text style={{ fontSize: 18, color: '#835E28', fontWeight: 'bold' }}>猜你喜欢</Text>
        </View>
        <View>
          {
            this.state.data !== null && this.state.data.contentList[0].theme.albumList.map(item => (
              <TouchableOpacity key={item.albumId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} onPress={() => NavigationUtils.goPage('Detail')}>
                <Image source={{ uri: item.coverPath }} style={{ width: 100, height: 100, borderRadius: 5 }}></Image>
                <View style={{ width: '65%', justifyContent: 'space-between' }} >
                  <View >
                    <Text style={{ fontSize: 16, color: '#835E28', fontWeight: 'bold', height: 30, lineHeight: 30 }}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: '#DCBB8A' }}>{item.shortIntro}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="customer-service" size="xxs" color="#DCBB8A" />
                    {
                      item.playCount >= 10000 ?
                        <Text style={{ fontSize: 12, color: '#DCBB8A', marginLeft: 10 }}>{(item.playCount / 10000).toFixed(1)}万</Text>
                        : <Text style={{ fontSize: 12, color: '#DCBB8A', marginLeft: 10 }}>{item.playCount}</Text>
                    }
                  </View>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}
