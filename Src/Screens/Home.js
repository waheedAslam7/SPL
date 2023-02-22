import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomLayer from '..//Assets/BottomLayer.svg';
import Logo from '../Assets/Logo.svg';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: '#EAF0F7',
        }}>
        <View style={styles.Logo}>
          <Logo />
        </View>
        <Text style={styles.myGroup}>My Group</Text>
        <View style={styles.MyGroupSpace}></View>
        <View style={styles.emptyContainer} />
        <TouchableOpacity style={styles.PlusButton}>
          <FontAwesome5Icon name="plus" size={25} color={'#4461F2'} />
        </TouchableOpacity>
        <View style={styles.bottomLayerConaner}>
          <BottomLayer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Logo: {
    height: '10%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  myGroup: {color: 'black', fontWeight: 'bold', left: 25, fontSize: 25},
  PlusButton: {
    height: 60,
    width: 60,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4461F2',
    alignSelf: 'center',
    top: 40,
    shadowColor: '#4461F2',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  MyGroupSpace: {
    height: '20%',
    backgroundColor: '#b0c4de',
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
    right: 20,
  },
  emptyContainer: {
    height: '36%',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  bottomLayerConaner: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
