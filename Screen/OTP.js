import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Text,Alert,Image } from 'react-native';

const OTP = ({props}) => {
    const [otp,setOTP] = useState('');

    const sendOTP = () =>{
        console.log(otp);
        if(!otp){
            Alert.alert("Please enter the OTP !");
        }
    };


    return (
        <>
            <View style={{
                flex : 1,
                flexDirection : "column",
                alignItems : "center",
                justifyContent : "center"
            }}>
                <Image source={require('../images/i1.jpg')} style={style.image}/>     
                <Text style={style.heading}>Cric-Gram</Text>
            </View>
            <View style={style.viewStyle}>
                <Text style={{marginBottom : 10}}>Enter Your OTP</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom : 10 }}
                    placeholder="Enter the OTP..."
                    value={otp}
                    onChangeText={(text) => setOTP(text)}                
                />
                <Button 
                    onPress={() => sendOTP()}
                    title="Reset Password"
                />
            </View>
        </>
    );
};

const style = StyleSheet.create({
    heading: {
        color: "blue",
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
    },
    viewStyle: {
        padding: 20,
        marginBottom : 200,
    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 50,
    }
})
export default OTP;