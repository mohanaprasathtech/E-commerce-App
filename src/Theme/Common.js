/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      searchbar: {
        backgroundColor: 'red',
        width: 150,
        color: 'gray',
      },
      header: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginLeft: 20,
      },
      inputcontainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
      },
      innerinputcontainer: {
        width: '98%',
        flexDirection: 'row',
        paddingTop: 8,
        marginHorizontal: 7,
        marginBottom: 8,
        alignItems: 'center',
      },
      sb: {
        width: '87%',
        borderRadius: 60,
        backgroundColor: '#fafafa',
        flexDirection: 'row',
      },
      imageSizeicon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        marginTop: 7,
      },
      input: {
        marginLeft: -15,
        width: '98%',
      },
      imageSizeicon2: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        marginTop: 0,
      },
      storypic: {
        marginTop: 5,
        height: 50,
        width: 50,
        paddingLeft: 10,
        marginLeft: 10,
        borderRadius: 20,
      },
      stytitle: {
        marginTop: 50,
        marginLeft: -43,
      },
      gridView: {
        marginVertical: 10,
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
      itemContainer: {
        borderRadius: 5,
      },
      thumbnail: {
        width: '90%',
        height: 155,
      },
      wishlist: {
        position: 'absolute',
        top: 15,
        right: 16,
        color: '#585858',
      },
      text: {
        position: 'absolute',
        top: 12,
        left: 16,
        color: '#909090',
      },
      itemName: {
        fontSize: 12.5,
        color: '#585858',
        fontWeight: '600',
      },
      itemRate: {
        fontSize: 15.5,
        color: '#080808',
        fontWeight: 'bold',
      },
      itemChangeRate: {
        fontSize: 15,
        fontWeight: '700',
        color: '#808080',
      },
      itemDiscount: {
        color: '#FF4500',
        fontWeight: '700',
      },
      capbg: {
        backgroundColor: '#E0E2F1',
        height: 130,
        width: 150,
        marginTop: 20,
        marginLeft: 30,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 0,
      },
      cappic: {
        height: 80,
        width: 100,
        marginTop: 30,
        marginLeft: 25,
        borderRadius: 50,
      },
      watchbg: {
        height: 130,
        width: 150,
        backgroundColor: '#E5F1DF',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        borderBottomStartRadius: 60,
        borderBottomEndRadius: 60,
        marginLeft: 180,
        marginTop: -120,
      },
      watchpic: {
        height: 80,
        width: 100,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 50,
      },
      shirtbg: {
        height: 220,
        width: 150,
        backgroundColor: '#EFE3D9',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        marginTop: -5,
        marginLeft: 30,
      },
      shirtpic: {
        borderRadius: 20,
        height: 170,
        width: 100,
        marginLeft: 20,
        marginTop: 30,
      },
      shoebg: {
        height: 130,
        width: 150,
        backgroundColor: '#F0E9DE',
        borderTopStartRadius: 0,
        borderTopEndRadius: 0,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        marginLeft: 180,
        marginTop: -220,
      },
      shoepic: {
        height: 80,
        width: 100,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 30,
      },
      texts: {
        fontSize: 30,
        color: 'black',
        letterSpacing: 2,
      },
      backicon: {
        backgroundColor: 'grey',
        height: 32,
        width: 32,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 10,
      },
      productbg: {
        height: 200,
        width: '80%',
        backgroundColor: 'pink',
        marginTop: 100,
        marginLeft: 35,
        borderTopStartRadius: 30,
        borderTopEndRadius: 120,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
      },
      productimage: {
        height: 300,
        width: '50%',
        top: -100,
        left: 73,
      },
      pics: {
        marginTop: 4,
        height: 40,
        width: 50,
        marginLeft: 3,
        borderRadius: 10,
      },
      size: {
        color: 'black',
        fontSize: 15,
        marginLeft: 20,
      },
      rounds: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginLeft: 20,
        marginTop: 4,
      },
      color: {
        height: 30,
        width: 30,
        borderRadius: 40,
        marginLeft: 20,
      },
      save: {
        height: 35,
        width: 30,
      },
      savebg: {
        height: 45,
        width: 50,
        backgroundColor: 'white',
        borderColor: '#EC8432',
        borderWidth: 1,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 4,
      },
      footer: {
        backgroundColor: '#181818',
        height: 50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
      },
    }),
  }
}
