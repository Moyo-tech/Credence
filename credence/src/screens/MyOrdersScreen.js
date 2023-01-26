import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyCart = ({navigation}) => {
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
              fontWeight: "700"
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 10,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
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
                    uri: "https://cdn.pixabay.com/photo/2013/07/12/17/44/wedding-rings-152336__340.png"
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
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="minus"
                      style={{
                        fontSize: 16,
                        color: '777777',
                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="plus"
                      style={{
                        fontSize: 16,
                        color: '777777',
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    style={{
                      fontSize: 16,
                      color: '777777',
                      backgroundColor: '#ccc',
                      padding: 8,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
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
                    uri: "https://cdn.pixabay.com/photo/2017/08/12/18/15/rings-2634929__340.png"
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
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="minus"
                      style={{
                        fontSize: 16,
                        color: '777777',
                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: 'B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="plus"
                      style={{
                        fontSize: 16,
                        color: '777777',
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity >
                  <MaterialCommunityIcons
                    name="delete-outline"
                    style={{
                      fontSize: 16,
                      color: '777777',
                      backgroundColor: '#ccc',
                      padding: 8,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
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
                    2 Petre Melikishvili St.
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
              Payment Method
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
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: '#0043f9',
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000000',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: '#000000'}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000000',
                  opacity: 0.8,
                }}>
                &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000000',
                  opacity: 0.8,
                }}>
                &#8377;{total / 20}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                &#8377;{total + total / 20}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity  onPress={() => {
                navigation.navigate('PaymentScreen');
              }}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: '#0043f9',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: 'ffffff',
              textTransform: 'uppercase',
            }}>
            CHECKOUT (&#8377;{total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
