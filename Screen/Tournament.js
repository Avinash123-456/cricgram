import React,{useState} from 'react';
import { TextInput, Text, StatusBar, StyleSheet, Alert, Button, View, TouchableOpacity,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Host = (props) => {

    const [date,setDate] = useState('');
    const [venue,setVenue] = useState('');
    const [players,setPlayers] = useState('');
    const [fees,setFees] = useState('');
    const [type,setType] = useState('');
    const [ball,setBall] = useState('');
    const [facilities,setFacilities] = useState('');
    
    
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
                marginTop : 50
            }}>
                <Image source={require('../images/i1.jpg')} style={style.image}/>     
                <Text style={style.heading}>Cric-Gram</Text>
            </View>
            <View style={style.view}>
                <Text style={{
                    fontSize : 25,
                    fontWeight : "bold",
                    textAlign : "center",
                    marginVertical : 20
                }}>Organize a Tournament</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 10,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Enter the Date of Tournament"
                    value={date}
                    onChangeText={(text) => setDate(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Enter the Venue of Tournament"
                    value={venue}
                    onChangeText={(text) => setVenue(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Enter the Players per Team in Tournament"
                    value={players}
                    secureTextEntry={true}
                    onChangeText={(text) => setPlayers(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Enter the Entry fees per Team"
                    value={fees}
                    onChangeText={(text) => setFees(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Match Type (Overarm / Underarm)"
                    value={type}
                    secureTextEntry={true}
                    onChangeText={(text) => setType(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Ball Type Tennis, Lether, Goodshot"
                    value={ball}
                    onChangeText={(text) => setBall(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10,textAlign : "center",fontWeight : "bold",borderRadius : 15, }}
                    placeholder="Facilities Provided"
                    value={facilities}
                    secureTextEntry={true}
                    onChangeText={(text) => setFacilities(text)}
                />
                
                <Button
                    title="Organize"
                    color="red"
                    onPress={() => sendData()}
                />
                
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
        justifyContent: "center",
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 50,
        marginRight : 20
    }
})

export default Host;