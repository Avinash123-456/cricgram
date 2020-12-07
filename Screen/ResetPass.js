import React,{useState} from 'react';
import { TextInput,StyleSheet,View,Text,Button,Alert,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ResetPass = (props) => {
    const [email,setEmail] = useState('');

    const sendCred = async() => {
        if(!email){
            Alert.alert("Please enter your email !");
        }
        await fetch("http://29e6ab7fdb56.ngrok.io/forgotPass",{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "email" : email, 
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    setTimeout(() => {
        props.navigation.navigate('OTP');
    }, 5000);
    return (
        <ScrollView>
            <View style={{
                flex : 1,
                flexDirection : "row",
                alignItems : "center",
                justifyContent : "center",
                marginTop : 50
            }}>
                <Image source={require('../images/i1.jpg')} style={style.image}/>     
                <Text style={style.heading}>Cric-Gram</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 250
            }}>
                <Image source={require('../images/i1.jpg')} style={{
                    width: 100,
                    height: 200,
                    borderRadius : 15,
                }} />
            </View>
            <View style={style.viewStyle}>
                <Text style={{fontSize : 20,fontWeight : "bold",textAlign : "center"}}>FORGOT PASSWORD</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",borderRadius : 15,fontWeight : "bold" }}
                    placeholder="Enter the Email..."
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Button 
                    onPress={() => sendCred()}
                    title="Get OTP"
                />
                <Text style={{
                    fontSize : 15,
                    fontWeight : "700",
                    padding : 20,
                    textAlign : "center"
                }}>A Link will be send to the valid email address on which you can change your password</Text>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    heading: {
        color: 'red',
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
    },
    viewStyle : {
        padding : 20,
        marginBottom : 200,
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 50,
        marginRight : 20
    }
})
export default ResetPass;