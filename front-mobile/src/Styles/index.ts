import { StyleSheet } from 'react-native';

const colors = {
    red:"#DA5C5C",
    white: "#FFF"
};

const text = StyleSheet.create({
    
    //Text Header
    text_logo:{
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight:25,
        letterSpacing: 0.24,
        color: colors.white,
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold',
    },

    //Text Home
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
      },
      subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
      },
      buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
      },
})


const navBar = StyleSheet.create({
    container:{
        paddingTop:50,
        flexDirection: "row",
        height: 90,      
        justifyContent:"center",
        backgroundColor: colors.red,
    }
})

const home = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
      },
})


export { navBar, colors, text, home }