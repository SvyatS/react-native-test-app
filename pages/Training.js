import { View, Text, Image, Pressable, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/Dict'
import MenuTabs from '../components/MenuTabs'

export default function Training ({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.content}>
            </View>
            <MenuTabs activeNum={1} navigation={navigation} />
        </SafeAreaView>
    )
}