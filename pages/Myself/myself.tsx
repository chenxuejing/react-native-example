import React, { Component } from 'react'
import { Text, View, ScrollView, Image} from 'react-native'

import { Icon } from '@ant-design/react-native';
import img from '../../assets/images/goucai-weidenglu.png'
import backgroundimg from '../../assets/images/timg(1).jpg'

import { styles } from './style_myself.js';

import Photo from './Photo'

export interface AppProps {
}

export interface AppState {

}

export default class Myself extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

  }

  public render() {
    return (
      <ScrollView >
        <View style={styles.top_box}>
          <Image source={backgroundimg} style={styles.backgroundimg}></Image>
          <View style={styles.titleName}>
            <Image source={img}></Image>
            <Text style={{ fontSize: 16, color: '#fff' }}>宝宝</Text>
          </View>
          <View style={styles.top_news}>
            <View style={{ justifyContent: 'space-around', height: 80 }}>
              <Text style={{ fontSize: 18 }}>VIP限时优惠</Text>
              <Text style={{ fontSize: 12 }}>畅听10大场馆 畅学统编语文</Text>
            </View>
            <Text style={styles.top_news_buttom}>开通会员</Text>
          </View>
        </View>
        <View style={styles.item_box}>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="dashboard" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>播放历史</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="crown" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>我的收藏</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="contacts" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>我的课程</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
        </View>
        <View style={styles.item_box}>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="download" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>我的下载</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="shopping-cart" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>我的已购</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Icon name="wallet" size="md" color="#BDAB65" />
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>我的作品</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
        </View>
        <View style={styles.item_box}>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>兑换</Text>
            </View>
            <Icon name="right" size="md" color="#BDAB65" />
          </View>
          <View style={styles.item}>
            <View style={styles.item_left}>
              <Text style={{ paddingLeft: 10, fontSize: 16 }}>设置</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text>更多宝宝信息</Text>
              <Icon name="right" size="md" color="#BDAB65" />
            </View>
          </View>
        </View>
        <Photo></Photo>
      </ScrollView >
    );
  }
}
