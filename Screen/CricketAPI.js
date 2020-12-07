import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import Loading from './Loading';

const API = () => {

    const [data,getData] = useState('');

    useEffect(() => {
        fetch("https://cricapi.com/api/matches?apikey=uiatNlJc31YMjOp8AF58ZXQzTG62")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getData(data.matches);
        })
    },[]);
    return(
        <ScrollView>
            <Text style={{textAlign : "center",fontSize : 20,fontWeight : "bold",color : "red"}}>Get Upcoming Matches</Text>
            {
                data === '' ? 
                <Loading /> : 
                data.map(x => {
                    return(
                        <View style={styles.viewStyle} key={x.unique_id}>
                            <Text style={{fontSize : 17,fontWeight : "bold",color : "green"}}>{x.dateTimeGMT}</Text>
                            <Text>{x.team-1} v/s {x.team-2}</Text>
                            <Text style={{fontSize : 17,fontWeight : "bold",color : "blue"}}>{x.type}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )

};

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 2,
        padding : 10,
        margin : 10
    }
})

export default API;