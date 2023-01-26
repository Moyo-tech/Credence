import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  LogBox,
  SectionList,
} from 'react-native';

import {dummyData, icons, images, colors, SIZES, fonts} from '../global';
import {PriceAlert, TransactionHistory} from '../components';

export default function BusinessConsoleScreen({navigation}) {
  const [transactionHistory, setTransactionHistory] = React.useState(
    dummyData.transactionHistory,
  );
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Bottom Tab Navigator: tabBarOptions is Deprecated']);
  }, []);

  function renderHeader() {
    return (
      <View style={{width: '100%', height: 250, ...styles.shadow}}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => console.log('Notification on Pressed')}>
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{color: colors.white, width: '100%', ...fonts.android.h2}}>
              Welcome To Admin
            </Text>
        
            <Text style={{color: colors.white, ...fonts.android.body5}}>
              Get started by creating a menu
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
              }}>
              <Text style={styles.buttonTitle}>Create</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
  function renderAlert() {
    return <PriceAlert />;
  }


  function renderTransactionHistory() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: colors.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 4,
        }}>
        <Text style={{...fonts.android.h2}}>Orders Placed</Text>
        <TransactionHistory
          transactionName={'Silver Garet'}
          Date={'12/11'}
          Price={'7200'}
        />
        <TransactionHistory
          transactionName={'Emerald Green'}
          Date={'2/11'}
          Price={'1200'}
        />
              <TransactionHistory
          transactionName={'Diamond Stone'}
          Date={'7/9'}
          Price={'100'}
        />
              <TransactionHistory
          transactionName={'Stale Steel'}
          Date={'5/10'}
          Price={'200'}
        />
              <TransactionHistory
          transactionName={'Bracelets'}
          Date={'2/11'}
          Price={'1200'}
        />
              <TransactionHistory
          transactionName={'Red Ruby'}
          Date={'2/11'}
          Price={'145'}
        />
              <TransactionHistory
          transactionName={'Set Rings'}
          Date={'12/11'}
          Price={'100'}
        />
      </View>
    );
  }

  function topcomponent() {
    return (
      <View>
        {renderHeader()}
        {renderAlert()}
      </View>
    );
  }
  function bottomcomponent() {
    return <View>{renderTransactionHistory()}</View>;
  }
  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 130}}>
        <FlatList
          ListHeaderComponent={topcomponent()}
          ListFooterComponent={bottomcomponent()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  button: {
    backgroundColor: '#004AAD',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#004AAD',
    height: 40,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
