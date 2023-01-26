import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,Animated } from 'react-native'
import {restaurantsData} from '../global/Data'
import {colors} from "../global/styles"

import {Icon} from 'react-native-elements'

export default function RestaurantHeader({navigation,id}) {
    const index2 = 10
    const currentValue = new Animated.Value(1)

    const [liked,setLiked] = useState(false)
    const [counter, setCounter] = useState(-2)
    const[visible,setVisible] = useState(false)

    const likeHander =()=>{
        if(liked == false)
                setVisible(true)

        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(()=>{
        if(liked == true){
            Animated.spring(currentValue,{
                toValue:3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue,{
                    toValue:1,
                    useNativeDriver:true,
                    friction:2
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])

    return (
        <View style ={styles.container}>
            <ImageBackground
                style = {styles.container}
                source ={{uri: "https://images.unsplash.com/photo-1599708978061-501091150ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80"}}
                >
                <View style ={styles.view1}>
                    <View style ={styles.view2}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.navigate('CreateMenu')}
                        />
                    </View>
                    <View style ={styles.view3}>
                        <Icon 
                                name ={liked && (index2 == counter) ? "favorite" : "favorite-border"}
                                type = "material"
                                color = 'red'
                                size = {30}
                                onPress ={likeHander}
                            />
                    </View>

                </View>
                <View style ={styles.view4}>
                    {visible && (index2 == counter) &&
                        <Animated.View style = {{transform:[{scale:currentValue}]}}>
                            <Icon name = "favorite" size = {40} color = "red" type ="material" />
                        </Animated.View>
                    }

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

container:{height:150,
    },


view1: {flexDirection:"row",
        alignItems:"baseline",
       justifyContent:"space-between"
      },

view2:{margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
      },

view3:{marginTop:0,
       margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
       },
       
view4:{ marginTop:0,
        alignItems:"center",
        justifyContent:"center" 
      },


})
