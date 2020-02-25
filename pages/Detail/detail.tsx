import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { get } from "../../utils/http.js"

import { Icon } from '@ant-design/react-native';
import { styles } from './style.detail.js';

export interface AppProps {
}

export interface AppState {
  data: any,
  list: any,
  selectedTab: string,
  sgin: boolean,
}

export default class Detail extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: null,
      list: null,
      selectedTab: 'meau',
      sgin: false
    };
  }

  async componentDidMount() {
    let result = await get("http://123.57.64.216:9000/api/detail_1")
    let result1 = await get("http://123.57.64.216:9000/api/detail_11")
    this.setState({
      data: result,
      list: result1
    })
  }



  _onPress2() {
    this.setState({
      selectedTab: 'meau'
    })
  }
  _onPress1() {
    this.setState({
      selectedTab: 'indro'
    })
  }

  _scroll(e: any) {
    var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    if (offsetY >= 200) {
      this.setState({
        sgin: true
      })
    } else {
      this.setState({
        sgin: false
      })
    }
  }

  public render() {
    if (this.state.data !== null) {
      return (
        <View>
          <View style={[styles.title, this.state.sgin ? styles.title1 : '']}>
            {
              this.state.selectedTab === 'indro'
                ? <Text
                  onPress={this._onPress1.bind(this)}
                  style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#835E28' }} >简介</Text>
                : <Text
                  onPress={this._onPress1.bind(this)}
                  style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#DCBB8A' }} >简介</Text>
            }
            {
              this.state.selectedTab === 'meau'
                ? <Text
                  onPress={this._onPress2.bind(this)}
                  style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#835E28' }}>目录</Text>
                : <Text
                  onPress={this._onPress2.bind(this)}
                  style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#DCBB8A' }}>目录</Text>
            }
          </View>
          <ScrollView style={{ paddingBottom: 20, paddingTop: 20, backgroundColor: '#fff' }} onScroll={this._scroll.bind(this)}>
            <Text style={{ paddingLeft: 20, paddingRight: 20, fontSize: 24, color: "#835E28", paddingBottom: 20, fontWeight: 'bold' }}>{this.state.data.albumDetail.title}</Text>
            <View style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={{ uri: this.state.data.albumDetail.coverPath }} style={{ width: 100, height: 100, borderRadius: 5 }}></Image>
              <View style={{ justifyContent: 'space-between', width: '65%' }}>
                <Text style={{ fontSize: 14, color: "#835E28" }}>{this.state.data.albumDetail.shortIntro}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: 'orange', color: '#fff', paddingLeft: 10, paddingRight: 10, height: 30, lineHeight: 30, borderRadius: 5 }}>收藏</Text>
                  <Text style={{ fontSize: 14, color: "#835E28" }}>{this.state.data.albumDetail.subscriptionCount}人已收藏</Text>
                </View>
              </View>
            </View>
            <View style={{paddingLeft: 20, paddingRight: 20, flexDirection: 'row', marginTop: 10,backgroundColor:'#fff'}}>
              {
                this.state.data.albumDetail.tagList.map(item => (
                  <Text key={item.tagId} style={{ color: '#DCBB8A', backgroundColor: '#f1f1f1', paddingLeft: 10, paddingRight: 10, borderRadius: 10, height: 20, lineHeight: 20, marginRight: 10 }}>
                    {item.name}
                  </Text>
                ))
              }
            </View>
            <View style={{ backgroundColor: '#fff', marginTop: 8 }}>
              <View style={{flexDirection: 'row', height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                {
                  this.state.selectedTab === 'indro'
                    ? <Text
                      onPress={this._onPress1.bind(this)}
                      style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#835E28' }} >简介</Text>
                    : <Text
                      onPress={this._onPress1.bind(this)}
                      style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#DCBB8A' }} >简介</Text>
                }
                {
                  this.state.selectedTab === 'meau'
                    ? <Text
                      onPress={this._onPress2.bind(this)}
                      style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#835E28' }}>目录</Text>
                    : <Text
                      onPress={this._onPress2.bind(this)}
                      style={{ width: '50%', textAlign: 'center', height: 50, lineHeight: 50, fontSize: 18, fontWeight: 'bold', color: '#DCBB8A' }}>目录</Text>
                }
              </View>
              <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
                {
                  this.state.selectedTab !== 'meau' ? (
                    <View key={this.state.data.albumDetail.albumUid}>
                      <Text style={{ fontSize: 14, paddingBottom: 60, paddingTop: 30, }}>{this.state.data.albumDetail.richIntro}</Text>
                    </View>
                  ) : (
                      <View key={this.state.data.albumDetail.playCount}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20 }}>
                          <Text style={{ color: '#DCBB8A' }}>共{this.state.data.albumDetail.trackCount}条声音</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'orange', }}>正序|</Text>
                            <Text style={{ color: '#DCBB8A', marginRight: 10 }}>逆序</Text>
                            <Icon name="appstore" size="xs" color="orange" />
                            <Text style={{ color: 'orange' }}>选集</Text>
                          </View>
                        </View>
                        {
                          this.state.list.trackRecordList.map((item, index) => (
                            <View key={item.albumId}>
                              {
                                index >= 1 && (
                                  <View key={item.totalLength} style={{ flexDirection: 'row', alignItems: 'center', height: 80, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                    <Text style={{ width: 30, fontSize: 16, textAlign: 'center', color: '#835E28' }}>{index}</Text>
                                    <View style={{ width: '70%', flex: 1, justifyContent: 'center' }}>
                                      <Text style={{ fontSize: 16, color: '#835E28' }}>{item.title}</Text>
                                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="eye" size="xxs" color="#DCBB8A" />
                                        <Text style={{ color: '#DCBB8A' }}>{parseInt(item.duration / 60)}:{item.duration % 60}</Text>
                                      </View>
                                    </View>
                                    <Icon name="download" size="md" color="#835E28" />
                                  </View>
                                )
                              }
                            </View>
                          ))
                        }
                      </View>
                    )
                }
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return null
    }
  }
}
