import React from 'react';
import {ActivityIndicator,Image,View,StyleSheet, StatusBar} from 'react-native';

const Loading = () => {
    return(
        <>
            <StatusBar backgroundColor = "green" />
            <View style={styles.homeText}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Image 
                    style={{width : 400,height : 400}}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    homeText : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default Loading;