import React, {useState} from 'react';
import {
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    TextInput, 
    FlatList,
    Platform, 
    Pressable, 
    Alert } from 'react-native';
import countryData from './countryData.json';
import CountryFlag from 'react-native-country-flag';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
//import RNShake from 'react-native-shake';
//import { FlashList } from '@shopify/flash-list';

function App() {

    const [selectedCountryIsoCode, setSelectedCountryIsoCode] = useState('NG');
    const selectedCountry = countryData.find(country => country.isoCode = selectedCountryIsoCode)
    const [phoneNumber, setPhonenumber] = useState('');

    renderPost = post => {
        return (
            <View style={{flex: 1, marginHorizontal: 18}}>
                <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity onPress={() => {setSelectedCountryIsoCode(country.isoCode); RBSheet.close()}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <Text style={{paddingBottom: 15, paddingRight: 30}}>{post.flag}</Text>
                            <Text style={{flex: 1, fontSize: 16, fontWeight: '500', paddingBottom: 15}}>
                                {post.name}</Text>
                            <Text style={{paddingBottom: 15, fontWeight: '500'}}>{post.dialCode}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{marginHorizontal: 15}}>
                <Text style={{paddingBottom: 30, fontSize: 24, fontWeight: "500"}}>
                    Phone number
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', marginTop: 12, marginRight: 10}}>
                        <Text style={{marginRight: 10, marginTop: 10}}><CountryFlag isoCode={selectedCountry.isoCode} size={20}/></Text>
                        <TouchableOpacity onPress={() => this.RBSheet.open()}>
                            <Icon name='chevron-down-outline' size={26} color={'#2B50AA'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberInput}>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={phoneNumber => setPhonenumber(phoneNumber)}
                            placeholder='Type your phone number'
                            keyboardType={'phone-pad'}
                            autocapitalize='none'
                            maxLength={15}
                            style={{fontSize: 16}}
                        />
                    </View>
                    <Pressable
                        onLongPress={() => Alert.alert('Edit this space how you want :)')}
                        style={{ flex: 2 }}
                    >
                        <View style={{
                            height: 40, backgroundColor: '#fff', borderWidth: 1,
                            borderRadius: 10, justifyContent: 'center'
                        }}>
                            <Text style={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>
                                Submit
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>

            <RBSheet
                ref={ref => {
                    this.RBSheet = ref;
                }}
                height={550}
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: '#EFEFEF'
                    }
                }}
            >
                <View>
                    <Text style={{
                        fontSize: 17, fontWeight: '700', paddingTop: 20,
                        textAlign: 'center', justifyContent: 'center'
                    }}>Select your country</Text>
                </View>
                <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10 }}></View>

                <View style={{ marginTop: 15, paddingBottom: 70 }}>
                    <FlatList
                        data={countryData}
                        renderItem={({ item }) => this.renderPost(item)}
                        keyExtractor={(country, key) => key.toString()}
                    />
                </View>
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15
    },
    dialCodeButton: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#8A8F9E',
        color: '#161F3D',
        flex: 5,
        height: 40,
        paddingTop: 15
    },
    numberInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#8A8F9E',
        color: '#161F3D',
        flex: 5,
        height: 40,
        paddingTop: 15
    },
    inputField: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: '#161F3D',
        fontSize: 15,
        height: 40
    }
});

export default App;