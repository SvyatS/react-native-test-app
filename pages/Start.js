import react from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/Start'

export default function Start ({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity onPress={() =>
                navigation.navigate('Intro-1')
            }>
            <View>
                <Image style={styles.logo} source={ImageAssets.startImage}/>
                <Text style={styles.text}>WordsFactory</Text>
            </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}
