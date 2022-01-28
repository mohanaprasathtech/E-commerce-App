// import React, { useState, useEffect } from 'react'
// import {
//   View,
//   ActivityIndicator,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native'
// import { useDispatch } from 'react-redux'
// import { useTranslation } from 'react-i18next'
// import { Brand } from '@/Components'
// import { useTheme } from '@/Hooks'
// import { useLazyFetchOneQuery } from '@/Services/modules/users'
// import { changeTheme } from '@/Store/Theme'

// const ExampleContainer = () => {
//   const { t } = useTranslation()
//   const { Common, Fonts, Gutters, Layout } = useTheme()
//   const dispatch = useDispatch()

//   const [userId, setUserId] = useState('9')
//   const [
//     fetchOne,
//     { data, isSuccess, isLoading, isFetching, error },
//   ] = useLazyFetchOneQuery()

//   useEffect(() => {
//     fetchOne(userId)
//   }, [fetchOne, userId])

//   const onChangeTheme = ({ theme, darkMode }) => {
//     dispatch(changeTheme({ theme, darkMode }))
//   }

//   return (
//     <ScrollView
//       style={Layout.fill}
//       contentContainerStyle={[
//         Layout.fill,
//         Layout.colCenter,
//         Gutters.smallHPadding,
//       ]}
//     >
//       <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
//         <Brand />
//         {(isLoading || isFetching) && <ActivityIndicator />}
//         {!isSuccess ? (
//           <Text style={Fonts.textRegular}>{error}</Text>
//         ) : (
//           <Text style={Fonts.textRegular}>
//             {t('example.helloUser', { name: data?.name })}
//           </Text>
//         )}
//       </View>
//       <View
//         style={[
//           Layout.row,
//           Layout.rowHCenter,
//           Gutters.smallHPadding,
//           Gutters.largeVMargin,
//           Common.backgroundPrimary,
//         ]}
//       >
//         <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
//           {t('example.labels.userId')}
//         </Text>
//         <TextInput
//           onChangeText={setUserId}
//           editable={!isLoading}
//           keyboardType={'number-pad'}
//           maxLength={1}
//           value={userId}
//           selectTextOnFocus
//           style={[Layout.fill, Common.textInput]}
//         />
//       </View>
//       <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>

//       <TouchableOpacity
//         style={[Common.button.rounded, Gutters.regularBMargin]}
//         onPress={() => onChangeTheme({ darkMode: null })}
//       >
//         <Text style={Fonts.textRegular}>Auto</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[Common.button.outlineRounded, Gutters.regularBMargin]}
//         onPress={() => onChangeTheme({ darkMode: true })}
//       >
//         <Text style={Fonts.textRegular}>Dark</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[Common.button.outline, Gutters.regularBMargin]}
//         onPress={() => onChangeTheme({ darkMode: false })}
//       >
//         <Text style={Fonts.textRegular}>Light</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   )
// }

// export default ExampleContainer
import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FlatGrid } from 'react-native-super-grid'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import story from '../../Story'
import product from '../../Product'
import { useNavigation } from '@react-navigation/core'
function ExampleContainer() {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={Common.inputcontainer}>
        <View style={Common.innerinputcontainer}>
          <View style={Common.sb}>
            <Image
              style={Common.imageSizeicon}
              source={require('../Assets/Images/search.png')}
            />
            <TextInput
              style={Common.input}
              placeholder="&nbsp; &nbsp; Search"
            />
          </View>

          <Pressable>
            <Image
              style={Common.imageSizeicon2}
              source={require('../Assets/Images/preference.png')}
            />
          </Pressable>
        </View>
      </View>
      <Text style={Common.header}>Categories</Text>
      <View>
        <ScrollView horizontal={true}>
          {story.map(item => (
            <>
              <Image style={Common.storypic} source={{ uri: item.image }} />
              <Text style={Common.stytitle}>{item.name}</Text>
            </>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Text style={Common.header}>All Products</Text>
        <Text style={{ color: 'gray', marginLeft: '70%', marginTop: '-5%' }}>
          Sort by:
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: '500',
            marginLeft: '82%',
            marginTop: '-5%',
          }}
        >
          Latest
        </Text>
      </View>
      {/* grid */}
      <FlatGrid
        itemDimension={120}
        data={product}
        style={Common.gridView}
        spacing={15}
        renderItem={({ item }) => (
          <View
            style={[
              Common.itemContainer,
              { backgroundColor: '#F5F5F5', marginLeft: '-2%' },
            ]}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <Image source={{ uri: item.image }} style={Common.thumbnail} />
              {/*End of Grid Method*/}
              {/* <MaterialIcons name="filter-none" size={25} style={Common.text} /> */}
            </TouchableOpacity>

            {/* <AntDesign name="hearto" size={25} style={Common.wishlist} /> */}

            <Text style={Common.itemName}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Common.itemRate}>
                {'\u20B9'} {item.rate}&nbsp;&nbsp;&nbsp;
              </Text>
              <Text style={Common.itemChangeRate}>
                {'\u20B9'}
                {item.star}
              </Text>
              <Text style={Common.itemDiscount}>
                &nbsp;&nbsp;&nbsp;{item.discount}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={Common.footer}>
        <Image
          style={{
            height: 35,
            width: 30,
            marginLeft: 40,
            marginTop: 8,
            borderRadius: 10,
          }}
          source={require('../Assets/Images/home.png')}
        />
        <Image
          style={{
            height: 35,
            width: 30,
            marginLeft: 60,
            marginTop: 8,
            borderRadius: 10,
          }}
          source={require('../Assets/Images/cartbag.png')}
        />
        <Image
          style={{
            height: 35,
            width: 30,
            marginLeft: 60,
            marginTop: 8,
            borderRadius: 10,
          }}
          source={require('../Assets/Images/saves.png')}
        />
        <Image
          style={{
            height: 35,
            width: 30,
            marginLeft: 60,
            marginTop: 8,
            borderRadius: 10,
          }}
          source={require('../Assets/Images/profile.png')}
        />
      </View>
    </View>
  )
}

export default ExampleContainer
