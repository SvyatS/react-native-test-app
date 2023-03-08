import { View, Text, Image, Pressable, SafeAreaView } from "react-native";
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/Intro'

export default function IntroFirst ({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <Text 
                style={styles.skipBtn} 
                onPress={() =>navigation.navigate('SignUp')}>
                    Skip
            </Text>
            <View >
                <Image style={styles.image} source={ImageAssets.introFirst} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Learn anytime{'\n'}and anywhere</Text>
                <Text style={styles.text}>Quarantine is the perfect time to spend your{'\n'}
                    day learning something new, from anywhere!
                </Text>
            </View>
            <View style={styles.dotsContainer}>
                <View style={styles.dots.blue}></View>
                <View style={styles.dots.gray}></View>
                <View style={styles.dots.gray}></View>
            </View>
            <View style={styles.btnContainer}>
                <Pressable 
                    style={styles.btn} 
                    onPress={() =>navigation.navigate('Intro-2')}>
                        <Text style={styles.btnText}>Next</Text>
                </Pressable>   
            </View>
        </SafeAreaView>
    )
}