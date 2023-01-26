import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessOrderScreen = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'ffffff',
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: '#777777',
                padding: 10,
                backgroundColor: '#ccc',
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: '#000000',
              fontWeight: '700',
            }}>
            Orders Placed
          </Text>
          <View></View>
        </View>
        <View style={{paddingHorizontal: 16, paddingTop: 25}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ccc',
                borderRadius: 20,
                marginRight: 22,
              }}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/12/17/44/wedding-rings-152336__340.png',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: '#000000',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  Silver Garet
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    $1799
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 30,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <Text> Quantity: </Text>
                  </View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ccc',
                borderRadius: 20,
                marginRight: 22,
              }}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2017/08/12/18/15/rings-2634929__340.png',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: '#000000',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  Silver Garet
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    $2344
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 30,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <Text> Quantity: </Text>
                  </View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: '#0043f9',
                    backgroundColor: '#ccc',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: '#0043f9',
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: '500',
                    }}>
                    Delivery To: 2 Petre Melikishvili St.
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000000',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: '#000000'}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessOrderScreen;
