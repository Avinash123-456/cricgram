import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props) => {
    return (
        <ScrollView>
            <View style={styles.homeText}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30
                }}>
                    <Image source={require('../images/i1.jpg')} style={styles.image} />
                    <Text style={styles.heading}>Cric-Gram</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 150
                }}>
                    <Image source={require('../images/i1.jpg')} style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }} />
                    <Text style={{
                        fontSize: 15,
                        marginTop: 10,
                        fontWeight: "bold"
                    }}>Bio Of The User </Text>
                </View>
                <View style={{
                    borderBottomWidth: 5,
                    flex: 1,
                    padding: 15,
                    width: 355,
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "space-between"
                }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                    >
                        <Text style={styles.text}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                    >
                        <Text style={styles.text}>Cricket News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                    >
                        <Text style={styles.text}>Cricket Score</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40
                }}>
                    <View style={styles.boxes}>
                        <Text style={styles.boxesText}>Host a Player/Team</Text>
                        <Text style={{ fontWeight: "800" }}>Description of Features</Text>
                        <View style={{ width: "40%", marginLeft: 130,marginTop : 30 }}>
                            <Button
                                title="Host"
                                color="red"
                            />
                        </View> 
                </View>
                <View style={styles.boxes}>
                    <Text style={styles.boxesText}>Organize a Tournament</Text>
                    <Text style={{ fontWeight: "800" }}>Description of Features</Text>
                    <View style={{ width: "40%", marginLeft: 130,marginTop : 30 }}>
                            <Button
                                title="Organize"
                                color="red"
                            />
                        </View> 
                </View>

            </View>

            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    heading: {
        color: 'red',
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
    },
    homeText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "grey"
    },
    boxes: {
        borderWidth: 3,
        borderColor: "red",
        width: 280,
        height: 160,
        margin: 10,
        padding: 15
    },
    boxesText: {
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Home;