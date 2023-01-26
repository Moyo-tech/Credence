import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const colors = {
    buttons:"#004AAD",
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    CardComment : '#86939e',
    cardbackground:"white",
    statusbar:"#004AAD",
    heaherText:"white",
    lightgreen: '#66DF48',
    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple
    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa"
}


export const parameters ={
    headerHeight :40,

    styledButton:{
        backgroundColor:"#004aad",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:50,
        borderWidth:1, 
        borderColor:"#004aad",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },

    buttonTitle:{
        color:"white",
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3 
    }
}

export const title ={
    color:"#000000",
    fontSize :20,
    fontWeight:"bold"
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const  fonts ={
    ios: {
    regular: 'System',
    light: 'System',
    lightItalic: 'System',
    bold: 'System',
    boldItalic: 'System',
    black: 'System',
    blackItalic: 'System',
  },
  android: {
    regular: 'Roboto',
    italic: 'Roboto-Italic',
    thin: 'Roboto-Thin',
    thinItalic: 'Roboto-ThinItalic',
    light: 'Roboto-Light',
    lightItalic: 'Roboto-LightItalic',
    medium: 'Roboto-Medium',
    mediumItalic: 'Roboto-MediumItalic',
    bold: 'Roboto-Bold',
    boldItalic: 'Roboto-BoldItalic',
    condensed: 'RobotoCondensed-Regular',
    condensedItalic: 'RobotoCondensed-Italic',

    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
  }
  
}

const appTheme = { colors, SIZES, fonts, parameters, title };

export default appTheme;

