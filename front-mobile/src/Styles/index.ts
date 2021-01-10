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

      //Text OrderCard        
      text: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular'
      },
      orderName: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#263238',
        fontFamily: 'OpenSans_700Bold'
      },
      orderPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'right',
        letterSpacing: -0.24,
        color: '#DA5C5C',
        fontFamily: 'OpenSans_700Bold'
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

const order = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
})

const orderCard = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productsList: {
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 15
  }
})

export { navBar, colors, text, home, order, orderCard}