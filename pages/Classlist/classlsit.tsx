import * as React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import { get } from "../../utils/http.js"
import { Icon } from '@ant-design/react-native';

import { NavigationUtils } from './../../utils/NavigationUtils';
export interface AppProps {
  route?: any
}

export interface AppState {
  data: any
}

export default class Classlist extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    let result = await get(`http://123.57.64.216:9000/api/class_${this.props.route.params.index + 1}`)
    this.setState({
      data: result,
    })
  }

  public render() {
    return (

      <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        {
          this.state.data !== null && this.state.data.contentList.map(item => (
            <TouchableOpacity key={item.album.albumId} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} onPress={() => NavigationUtils.goPage('Detail')}>
              <Image source={{ uri: item.album.coverPath }} style={{ width: 100, height: 100, borderRadius: 5 }}></Image>
              <View style={{ width: '65%', justifyContent: 'space-between' }} >
                <View >
                  <Text style={{ fontSize: 16, color: '#835E28', fontWeight: 'bold', height: 30, lineHeight: 30 }}>{item.album.title}</Text>
                  <Text style={{ fontSize: 12, color: '#DCBB8A' }}>{item.album.shortIntro}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="customer-service" size="xxs" color="#DCBB8A" />
                  {
                    item.album.playCount >= 10000 ?
                      <Text style={{ fontSize: 12, color: '#DCBB8A', marginLeft: 10 }}>{(item.album.playCount / 10000).toFixed(1)}万</Text>
                      : <Text style={{ fontSize: 12, color: '#DCBB8A', marginLeft: 10 }}>{item.album.playCount}</Text>
                  }
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    );
  }
}
