import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { get } from "../../utils/http.js"
import { Icon } from '@ant-design/react-native';
import icon from '../../assets/images/icon.png'

interface Props {

}
interface State {
  data: any,
  img?: string
}



export default class Study extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    data: null,
    img: null
  }
  async componentDidMount() {
    let result = await get("http://123.57.64.216:9000/api/study")
    this.setState({
      data: result,
      img: result.courseHomePic
    })
  }
  render() {
    return (
      <ScrollView style={{
        backgroundColor: '#fff'
      }}>
        <Image source={{ uri: this.state.img }} style={{ width: '100%', height: 130 }}></Image>
        <View style={{ flexDirection: 'row', paddingLeft: 20, paddingBottom: 10, paddingTop: 10, paddingRight: 20 }}>
          <Image source={icon} style={{ width: 20, height: 20 }}></Image>
          <Text style={{ fontSize: 18, lineHeight: 20, height: 20, color: '#835E28', fontWeight: 'bold' }}>给2-6岁孩子推荐的课程</Text>
        </View>
        {
          this.state.data && this.state.data.recommendList.dataList.map(item => (
            <View key={item.albumId}
              style={{
                backgroundColor: '#fff',
                width: '95%',
                marginBottom: 20,
                marginLeft: '2.5%',
                paddingTop: 10,
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.8,
                shadowRadius: 6,
                elevation: 10,
                borderRadius: 5
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: "100%" }}>
                <Image source={{ uri: item.coverPath }} style={{ width: '90%', height: 150, borderRadius: 5 }}></Image>
              </View>
              <Text style={{ width: "100%", paddingLeft: 20, paddingBottom: 10, paddingTop: 10, fontSize: 16, color: '#835E28', fontWeight: 'bold' }}>{item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20, paddingLeft: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Icon name="bulb" size="xxs" color="#BDAB65" />
                  {
                    item.unitCount ? <Text style={{ color: '#BDAB65' }}>{item.unitCount}单元</Text>
                      : <Text style={{ color: '#BDAB65' }}>预计学习{item.planDays}天</Text>
                  }
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Text style={{ color: 'orange' }}>{item.joinUserCount}</Text>
                  <Text style={{ color: '#835E28' }}>正在学习</Text>
                </View>
              </View>
              <Text style={{ marginLeft: 20, marginTop: 10, marginBottom: 10, height: 35, lineHeight: 35, backgroundColor: 'orange', color: 'white', textAlign: 'center', width: 150, fontWeight: 'bold', borderRadius: 5, fontSize: 16 }}>会员专享免费</Text>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}
