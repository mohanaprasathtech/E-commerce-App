import { Common } from '@/Theme'
import { IMMUTABLE_TYPES } from '@babel/types'
import React from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Button,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useTheme } from '@/Hooks'
import { useState } from 'react'
function ProductContainer() {
  const [size, setsize] = useState(['36', '38', '40', '42', '44', '48'])
  const [color, setcolor] = useState([
    '#39374C',
    '#7F6960',
    '#3B4538',
    '#6D242A',
  ])
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Image
          style={Common.backicon}
          source={require('../Assets/Images/back.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[Common.backicon, { marginLeft: '80%', marginTop: -28 }]}
          source={require('../Assets/Images/cart.png')}
        />
      </TouchableOpacity>
      <View style={Common.productbg}>
        <Image
          style={Common.productimage}
          source={require('../Assets/Images/shirt.jpg')}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={Common.pics}
          source={require('../Assets/Images/fside.jpg')}
        />
        <Image
          style={Common.pics}
          source={require('../Assets/Images/fside.jpg')}
        />
        <Image
          style={Common.pics}
          source={require('../Assets/Images/fside.jpg')}
        />
      </View>
      <Text
        style={{
          letterSpacing: 2,
          color: 'black',
          fontSize: 18,
          marginLeft: 20,
          marginTop: 5,
          fontWeight: '500',
        }}
      >
        Shaftesbury London
      </Text>
      <Text style={{ marginLeft: 20, color: 'gray' }}>
        Men blue checked Single-Breasted Casual Blazer
      </Text>
      <View>
        <Text style={{ color: 'black', marginLeft: 20, fontSize: 28 }}>
          {'\u20B9'} 300&nbsp;&nbsp;&nbsp;
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '63%',
            marginTop: -28,
          }}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={require('../Assets/Images/star.png')}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}
          >
            4.9
          </Text>
          <Text style={{ color: 'gray', top: 8, bottom: 0 }}>(200)Reviews</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 2,
        }}
      >
        <Text style={Common.size}>Select Size</Text>
        <Text
          style={[
            Common.size,
            {
              textDecorationLine: 'underline',
              color: '#EC8433',
              marginRight: 30,
            },
          ]}
        >
          Size Chart
        </Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {size.map(items => (
          <View style={Common.rounds}>
            <Text style={{ fontSize: 20 }}>{items}</Text>
          </View>
        ))}
      </View>

      <Text style={Common.size}>Colors</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {color.map(clr => (
          <View style={[{ backgroundColor: `${clr}` }, Common.color]}></View>
        ))}
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={Common.savebg}>
          <Image
            style={Common.save}
            source={require('../Assets/Images/save.png')}
          />
        </View>
        <View style={{ width: '68%', marginTop: 10, marginLeft: 40 }}>
          <Button title="Add to Cart" color="#EC8432" />
        </View>
      </View>
    </View>
  )
}

export default ProductContainer
