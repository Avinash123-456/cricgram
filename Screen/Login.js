import React,{useState} from 'react';
import { TextInput, Text, StatusBar, StyleSheet,Button, View, TouchableOpacity, Alert,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const LoginCred = async () => {
        if(!email || !pass){
            Alert.alert("Please fill all the fields !");
        }
        await fetch("http://29e6ab7fdb56.ngrok.io/signin",{
            method : "post",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "email" : email,
                "password" : pass 
            })
        })
        .then(res => res.json())
        .then(async (data) => {
            console.log(data);
            try{
                await AsyncStorage.setItem('token', JSON.stringify(data.token));
            }catch(e){
                console.log(e);
            }

        })
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor="red" />
            
            <View style={{
                flex : 1,
                flexDirection : "row",
                marginTop : 40,
                justifyContent : "center",
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
                    borderRadius : 20,
                }}/>      
            </View>
            
            <View style={style.view}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,textAlign : "center",borderRadius : 15,fontWeight : "bold" }}
                    placeholder="Enter the email..."
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",borderRadius : 15,fontWeight : "bold" }}
                    placeholder="Enter the Password..."
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                />
                <Button
                    title="Login"
                    color="red"
                    onPress={() => LoginCred()}
                />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignUp')}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10,textAlign : "center" }}>Don't Have an Account ?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ResetPass')}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10,textAlign : "center" }}>Forgot Password</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    heading: {
        color: "blue",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    view: {
        padding: 20,
        flex: 1,
        justifyContent: "center"
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 50,
        marginRight : 20,
    }
})

export default Login;