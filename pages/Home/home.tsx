import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { get } from "../../utils/http.js"
import { styles } from './style_home.js'
import { Icon } from '@ant-design/react-native';

import icon_1 from '../../assets/images/goucai-weidenglu.png'
import icon from '../../assets/images/icon.png'

import Maylike from './maylike'
import { NavigationUtils } from './../../utils/NavigationUtils';


interface Props {
  navigation?: any
}
interface State {
  data: Object,
  img: string,
  sgin: boolean,
  gridclass?: Array<object>
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

  }
  state = {
    data: null,
    img: null,
    sgin: false,
    gridclass: null,
  }
  async componentDidMount() {

    let timestamp = new Date().getTime()
    let result = await get(`https://xxm.ximalaya.com/mobile/album/home/v2/queryHomeContent?ageGroupId=14&currentPage=1&individuation=1&pageSize=20&syncPoint=${timestamp}&version=2.4.0`)
    this.setState({
      data: result,
      img: result.contentList[0].homeBg.bgInvoke,
      gridclass: result.contentList[1].homePartition.homePartitionList
    })
  }
  _scroll(e: any) {
    var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    if (offsetY >= 50) {
      this.setState({
        sgin: true
      })
    } else {
      this.setState({
        sgin: false
      })
    }
  }

  render() {
    return (
      <View style={styles.box_container}>
        <View style={[styles.top_box, this.state.sgin ? styles.top_box_1 : '']}>
          <Image source={icon_1} style={{ width: 30, height: 30 }} />
          <View style={styles.switch}>
            <Text style={{ color: '#fff', lineHeight: 30, height: 30 }}>幼儿</Text>
            <Icon name="down" size="xxs" color="#fff" />
          </View>
          <View style={styles.input}>
            <Text
              style={{ color: '#fff', lineHeight: 30, height: 30 }}
              onPress={() => NavigationUtils.goPage('Search')}
            >汤小米</Text>
            <Icon name="search" size="sm" color="#fff" />
          </View>
        </View>
        <ScrollView style={styles.scrollview} onScroll={this._scroll.bind(this)}>
          <Image source={{ uri: this.state.img }} style={styles.banner}></Image>

          <View style={styles.gridclass_box}>
            {
              this.state.gridclass && this.state.gridclass.map((item,index) => (

                <View style={styles.gridclass} key={item.id}>
                  <TouchableOpacity onPress={() => NavigationUtils.goPage('Classlist',{index})} style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{ uri: item.url }} style={styles.gridclass_img} ></Image>
                    <Text style={styles.gridclass_text}>{item.name}</Text>
                  </TouchableOpacity>
                </View>

              ))
            }
          </View>
          <View style={styles.lists}>
            {
              this.state.data && this.state.data.contentList.slice(2, 9).map((item) => (
                <View key={item.theme.themeId}>
                  <View style={styles.item}>
                    <View style={styles.item_title_box}>
                      <Image
                        source={icon}
                        style={styles.item_icon}></Image>
                      <Text style={styles.item_title}>{item.theme.dataPoint}</Text>
                    </View>
                    <View style={styles.item_more_box}>
                      <Text style={styles.item_more}>{item.theme.actionText}</Text>
                      <Icon name="right" size="xxs" color="#835E28" />
                    </View>
                  </View>
                  <View style={styles.item_content}>
                    {
                      item.theme.albumList.length !== 6 ? item.theme.albumList.map(value => (
                        <TouchableOpacity style={styles.item_content_item} key={value.albumId} onPress={() => NavigationUtils.goPage('Detail')}>
                          <Image
                            source={{ uri: value.coverPath }}
                            style={styles.item_content_item_img}></Image>
                          <Text numberOfLines={1} style={styles.item_content_item_title}>{value.title}</Text>
                          <Text numberOfLines={1} style={styles.item_content_item_p}>{value.shortIntro}</Text>
                        </TouchableOpacity>
                      ))
                        : item.theme.albumList.map(value => (
                          <TouchableOpacity style={styles.item_content_item_1} key={value.albumId} onPress={() => NavigationUtils.goPage('Detail')}>
                            <Image
                              source={{ uri: value.coverPath }}
                              style={styles.item_content_item_img_1}></Image>
                            <Text numberOfLines={1} style={styles.item_content_item_title}>{value.title}</Text>
                            <Text numberOfLines={1} style={styles.item_content_item_p}>{value.shortIntro}</Text>
                          </TouchableOpacity>
                        ))
                    }
                  </View>
                </View>

              ))
            }
          </View>
          <Maylike></Maylike>
        </ScrollView>
      </View >

    )
  }
}

export default Home

