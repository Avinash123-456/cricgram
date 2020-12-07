import React,{useState} from 'react';
import { TextInput, Text, StatusBar, StyleSheet, Alert, Button, View, TouchableOpacity,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const SignUp = (props) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    const sendData = async () => {
        if(!email || !pass || !name){
            Alert.alert("Please fill all the fields !");
        }
        await fetch("http://29e6ab7fdb56.ngrok.io/signup",{
            method : "post",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "name" : name,
                "email" : email,
                "password" : pass,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    } 

    return (
        <ScrollView>
            <StatusBar backgroundColor="red" />
                
            <View style={{
                flex : 1,
                flexDirection : "row",
                alignItems : "center",
                justifyContent : "center",
                marginTop : 30
            }}>
                <Image source={require('../images/i1.jpg')} style={style.image}/>     
                <Text style={style.heading}>Cric-Gram</Text>
            </View>
            <View style={{
                flex : 1,
                alignItems : "center",
                justifyContent : "center",
                height : 250
            }}>
                <Image source={require('../images/i1.jpg')} style={{
                    width : 100,
                    height : 200,
                    borderRadius : 15
                }}/>      
            </View>
            <View style={style.view}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 10,textAlign : "center",borderRadius : 15 }}
                    placeholder="Enter the Name..."
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,textAlign : "center",borderRadius : 15 }}
                    placeholder="Enter the email..."
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",borderRadius : 15 }}
                    placeholder="Enter the Password..."
                    value={pass}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass(text)}
                />
                <Button
                    title="Sign Up"
                    onPress={() => sendData()}
                />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10,textAlign : "center" }}>Already Have Account ?</Text>
                    
                </TouchableOpacity>
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
    view: {
        padding: 20,
        marginBottom : 100,
        flex: 1,
        justifyContent: "center"
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 50,
        marginRight : 20
    }
})

export default SignUp;