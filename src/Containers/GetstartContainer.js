import React from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Button,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { useNavigation } from '@react-navigation/core'
function GetstartContainer() {
  const navigation = useNavigation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  return (
    <View>
      <View style={Common.capbg}>
        <Image
          style={Common.cappic}
          source={require('../Assets/Images/cap.jpeg')}
        />
      </View>
      <View style={Common.watchbg}>
        <Image
          style={Common.watchpic}
          source={require('../Assets/Images/watch.jpeg')}
        />
      </View>
      <View style={Common.shirtbg}>
        <Image
          style={Common.shirtpic}
          source={require('../Assets/Images/coat.jpg')}
        />
      </View>
      <View style={Common.shoebg}>
        <Image
          style={Common.shoepic}
          source={require('../Assets/Images/shoe.jpeg')}
        />
      </View>
      <View
        style={{
          marginTop: 140,
          marginLeft: 30,
        }}
      >
        <Text style={Common.texts}>Discover New</Text>
        <Text style={Common.texts}>Collections Only</Text>
        <Text style={{ fontSize: 35, color: 'black', fontWeight: '700' }}>
          For men
        </Text>
      </View>
      <View style={{ width: '45%', marginLeft: 20, marginTop: 10 }}>
        <Button
          onPress={() => navigation.navigate('Main')}
          title="Get Stated"
          color="#EC8432"
        />
      </View>
    </View>
  )
}

export default GetstartContainer
