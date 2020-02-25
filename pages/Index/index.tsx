import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Img } from './styled_index.js'
import styles from './style_index.js'

import Home from '../Home/home'
import Study from '../Study/study'
import Myself from '../Myself/myself'

import TabNavigator from 'react-native-tab-navigator'
import * as Device from 'expo-device'

import cookbook from '../../assets/images/erji222.png'
import cookbookActive from '../../assets/images/erji.png'
import category from '../../assets/images/xuexi222.png'
import categoryActive from '../../assets/images/xuexi.png'
import map from '../../assets/images/xiaolian222.png'
import mapActive from '../../assets/images/xiaolian.png'

import { NavigationUtils } from './../../utils/NavigationUtils'


interface Props {
  navigation?:any
}
interface State {
  selectedTab: string
}

export default class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    
  }
  state: State = {
    selectedTab: 'home'
  }
  componentDidMount() {
    // console.log(Device.deviceName)
    NavigationUtils.navigation=this.props.navigation
  }

  render() {
    return (
      <TabNavigator
      tabBarStyle={Device.deviceName === 'HONOR V20' ? styles.tabBarStyle : null}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="陪伴"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Img source={cookbook} />}
          renderSelectedIcon={() => <Img source={cookbookActive} />}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
         <Home></Home>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'study'}
          title="学习"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Img source={category} />}
          renderSelectedIcon={() => <Img source={categoryActive} />}
          onPress={() => this.setState({ selectedTab: 'study' })}
        >
          <Study></Study>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'my'}
          title="我的"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Img source={map} />}
          renderSelectedIcon={() => <Img source={mapActive} />}
          onPress={() => this.setState({ selectedTab: 'my' })}
        >
          <Myself></Myself>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
