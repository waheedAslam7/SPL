import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import G from '../Assets/G.svg';
import A from '../Assets/A.svg';
import Logo from '../Assets/Logo.svg';

const Signup = ({navigation}) => {
  const [name, setname] = useState('eye');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          position: 'absolute',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: '10%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Logo />
          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              width: '90%',
              alignSelf: 'center',
              fontSize: 18,
              marginTop: 10,
              textAlign: 'center',
            }}>
            Sign Up
          </Text>

          <View
            style={{
              height: 25,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop:30,
            }}>
            <Input
              placeholder="Enter Email"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#EAF0F7',
                alignSelf: 'center',
                height: '100%',
              }}
              rightIcon={
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: 1,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>X</Text>
                </TouchableOpacity>
              }
              containerStyle={{backgroundColor: '#EAF0F7', borderRadius: 10}}
            />
          </View>

          <View
            style={{
              height:25,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop:40,
            }}>
            <Input
              placeholder="Enter Name"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#EAF0F7',
                alignSelf: 'center',
                height: '100%',
              }}
              rightIcon={
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: 1,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>X</Text>
                </TouchableOpacity>
              }
              containerStyle={{backgroundColor: '#EAF0F7', borderRadius: 10}}
            />
          </View>

          <View
            style={{
              height:25,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 40,
            }}>
            <Input
              placeholder="Phone"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#EAF0F7',
                alignSelf: 'center',
                height: '100%',
              }}
              containerStyle={{
                backgroundColor: '#EAF0F7',
                borderRadius: 10,
                alignItems: 'center',
              }}
              rightIcon={
                <FontAwesome5
                  name={"phone"}
                  size={18}
                
                />
              }
            />
          </View>

          <View
            style={{
              height:25,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 40,
            }}>
            <Input
              secureTextEntry={name == 'eye' ? false : true}
              placeholder="Password"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#EAF0F7',
                alignSelf: 'center',
                height: '100%',
              }}
              containerStyle={{
                backgroundColor: '#EAF0F7',
                borderRadius: 10,
                alignItems: 'center',
              }}
              rightIcon={
                <FontAwesome5
                  name={name}
                  color={'#9E9E9E'}
                  size={18}
                  onPress={() => {
                    if (name == 'eye') {
                      setname('eye-slash');
                    } else {
                      setname('eye');
                    }
                  }}
                />
              }
            />
          </View>
          <View
            style={{
              height:25,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 40,
            }}>
            <Input
              secureTextEntry={name == 'eye' ? false : true}
              placeholder="Confirm Password "
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#EAF0F7',
                alignSelf: 'center',
                height: '100%',
              }}
              containerStyle={{
                backgroundColor: '#EAF0F7',
                borderRadius: 10,
                alignItems: 'center',
              }}
              rightIcon={
                <FontAwesome5
                  name={name}
                  color={'#9E9E9E'}
                  size={18}
                  onPress={() => {
                    if (name == 'eye') {
                      setname('eye-slash');
                    } else {
                      setname('eye');
                    }
                  }}
                />
              }
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              height: '7%',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#4461F2',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
         

          <View
            style={{
              height: '8%',
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                width: '30%',
                borderColor: '#9E9E9E',
                height: 1,
              }}
            />
            <Text style={{color: '#616161', textAlign: 'center', fontSize: 15}}>
              or continue with
            </Text>
            <View
              style={{
                borderWidth: 1,
                width: '30%',
                borderColor: '#9E9E9E',
                height: 1,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              alignSelf: 'center',
              height: '5%',
              justifyContent: 'space-around',
              marginTop: 35,
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '25%',
                borderWidth: 0.4,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderColor: '#EEEEEE',
                elevation: 0.3,
              }}>
              <G />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: '100%',
                width: '25%',
                borderWidth: 0.4,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderColor: '#EEEEEE',
                elevation: 0.3,
              }}>
              <A />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
