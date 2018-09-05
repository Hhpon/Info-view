import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Map, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor() {
    super();
    this.state = {
      srcArray: [
        'https://weappcdn.hhp.im/1.jpg',
        'https://weappcdn.hhp.im/2.jpg',
        'https://weappcdn.hhp.im/3.jpg',
        'https://weappcdn.hhp.im/4.jpg',
        'https://weappcdn.hhp.im/5.jpg',
        'https://weappcdn.hhp.im/6.jpg',
        'https://weappcdn.hhp.im/7.jpg',
        'https://weappcdn.hhp.im/8.jpg',
        'https://weappcdn.hhp.im/9.jpg'
      ]
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getLocation() {
    wx.openLocation({
      latitude: 34.18668728890284,
      longitude: 108.99338324673363,
      name: 'TS.beauty 皮肤管理中心',
      address: '西安市曲江新区曲江池东路万科蜜柚5-3-1904'
    })
  }

  makePhoneCall(){
    wx.makePhoneCall({
      phoneNumber: '4008691112' 
    })
  }

  render() {
    const imageArray = this.state.srcArray.map((src) => {
      return (
        <Image style='width:29vw;height:29vw;' src={src}></Image>
      )
    })
    return (
      <View className='container'>
        <View className='header-container'>
          <View className='title-con'>
            <View>TS.皮肤管理中心</View>
            <View className='subtitle'>丽人.美容</View>
          </View>
          <View>
            <Image style='height:80px;width:80px' src=''></Image>
          </View>
        </View>
        <View className='mes-container'>
          <View onClick={this.getLocation} className='address-con'>
            <View className='address-left'>
              <AtIcon value='map-pin' color='#AFAFAF'></AtIcon>
              <View className='address'>西安市曲江新区曲江池东路万科蜜柚5-3-1904</View>
            </View>
            <AtIcon value='chevron-right' color='#AFAFAF'></AtIcon>
          </View>
          <View className='address-con'>
            <View className='address-left'>
              <AtIcon value='clock' size={22} color='#AFAFAF'></AtIcon>
              <View className='address'>11:00-20:00</View>
            </View>
          </View>
          <View onClick={this.makePhoneCall} className='address-con'>
            <View className='address-left'>
              <AtIcon value='phone' color='#AFAFAF'></AtIcon>
              <View className='address'>4008691112</View>
            </View>
            <AtIcon value='chevron-right' color='#AFAFAF'></AtIcon>
          </View>
        </View>
        <View className='image-container'>
          <View className='image-title'>
            <AtIcon value='image' color='#AFAFAF'></AtIcon>
            <View className='con-right'>门店照片</View>
          </View>
          <View className='image-con'>
            {imageArray}
          </View>
        </View>
        <View className='service-container'>
          <Image style='width:35vw;height:35vw;' src='https://weappcdn.hhp.im/10.jpg'></Image>
        </View>
      </View>
    )
  }
}

