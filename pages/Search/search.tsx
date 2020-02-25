import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native';

import { get } from "../../utils/http.js"
import { Icon } from '@ant-design/react-native';

import img1 from '../../assets/images/maoyan1.png'
import img from '../../assets/images/maoyan.png'
import img2 from '../../assets/images/maoyan2.png'
import img3 from '../../assets/images/maoyan3.png'

export interface AppProps {
  navigation: any
}

export interface AppState {
  data: any,
  history?: Array<string>,
  value?: any
}

export default class Search extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: null,
      history: ['奥特曼', '海底小分队'],
      value: null
    };
  }

  async componentDidMount() {
    let result = await get("http://123.57.64.216:9000/api/hotlist")
    this.setState({
      data: result,
    })
  }
  _onPress() {
    this.props.navigation.navigate('Index')
  }
  _onEndEditing(e) {
    if (e.nativeEvent.text !== '') {
      this.setState({
        history: [...this.state.history, e.nativeEvent.text]
      })
    }
  }
  _detele() {
    this.setState({
      history: []
    })
  }
  public render() {
    return (
      <View style={{ backgroundColor: '#FFF', width: '100%' }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 38,
            height: 50,
            paddingBottom: 10,
            alignItems: 'center'
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              width: '75%',
              borderRadius: 20,
              paddingLeft: 20,
            }}>
            <Icon name="search" size="md" color="#835E28" />
            <TextInput
              placeholderTextColor='#835E28'
              placeholder='西游记'
              style={{ fontSize: 14, paddingLeft: 10 }}
              onEndEditing={this._onEndEditing.bind(this)}
              clearTextOnFocus={true}
            ></TextInput>
          </View>
          <Text style={{ fontSize: 18, color: '#835E28' }} onPress={this._onPress.bind(this)}>取消</Text>
        </View>
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 30 }}>
          {
           this.state.history!==null&&( <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <Text style={{ color: "#835E28", fontSize: 16, fontWeight: 'bold' }}>搜索记录</Text>
              <Text onPress={this._detele.bind(this)}>
                <Icon name="close-circle" size="sm" color="#835E28" />
              </Text>
            </View>)
          }
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 }}>
            {
              this.state.history!==null&&this.state.history.map(item => (
                <Text
                  style={{
                    backgroundColor: '#f1f1f1',
                    color: "#835E28",
                    height: 30,
                    lineHeight: 30,
                    paddingRight: 10,
                    paddingLeft: 10,
                    marginRight: 20,
                    borderRadius: 15
                  }}>{item}</Text>
              ))
            }
          </View>
          <Text style={{ color: "#835E28", fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>大家都在搜</Text>
          <View >
            {
              this.state.data && this.state.data.hotWordList.map(item => (
                <View key={item.hotWord}
                  style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#eee',
                  }}>
                  <View style={{ position: 'relative' }}>
                    {
                      item.hotLevel === 1 && <Image source={img} style={{ width: 25, height: 22, position: 'absolute', left: 0, top: -10 }} />
                    }
                    {
                      item.hotLevel === 2 && <Image source={img1} style={{ width: 25, height: 22, position: 'absolute', left: 0, top: -10 }} />
                    }
                    {
                      item.hotLevel === 3 && <Image source={img2} style={{ width: 25, height: 22, position: 'absolute', left: 0, top: -10 }} />
                    }
                    {
                      item.hotLevel > 3 && <Image source={img3} style={{ width: 25, height: 22, position: 'absolute', left: 0, top: -10 }} />
                    }
                    {
                      item.hotLevel >= 10
                        ? <Text style={{ position: 'absolute', left: 3, top: -10, fontSize: 16, color: "#fff", }}>{item.hotLevel}</Text>
                        : <Text style={{ position: 'absolute', left: 8, top: -10, fontSize: 16, color: "#fff", }}>{item.hotLevel}</Text>
                    }
                  </View>
                  <Text style={{ fontSize: 16, color: "#835E28", paddingLeft: 40 }}>{item.hotWord}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

