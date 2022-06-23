/*
 * @Date: 2022-06-23 11:05:32
 * @LastEditors: 魏盛华
 * @LastEditTime: 2022-06-23 15:43:32
 * @Author: 魏盛华
 */
import { Alert } from 'react-native'

export default {
  initAlert(message) {
    Alert.alert('温馨提醒', message)
  },
}
