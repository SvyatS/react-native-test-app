import { View, Text, Image, Pressable, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/Dict'
import MenuTabs from '../components/MenuTabs'

export default function Dictionary ({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Cooking"
                    />
                    <TouchableHighlight style={styles.searchBlock}>
                        <Image 
                            style={styles.searchIcon}
                            source={ImageAssets.searchIcon} />
                    </TouchableHighlight>
                </View>
                <View style={styles.dictWord}>
                    <View style={styles.dictRow}>
                        <Text style={styles.wordTitle}>Cooking</Text>
                        <Text style={styles.wordTrans}>[ˈkʊkɪŋ]</Text>
                        <TouchableHighlight>
                        <Image 
                            style={styles.listenIcon}
                            source={ImageAssets.listenIcon} />
                    </TouchableHighlight>
                    </View>
                    <View style={styles.dictRow}>
                        <Text style={styles.wordPreTitle}>Part of Speech:</Text>
                        <Text style={styles.wordText}>Noun</Text>
                    </View>
                    <View style={styles.dictRow}>
                        <Text style={styles.wordPreTitle}>Meanings:</Text>
                    </View>
                    <View style={styles.meanBlock}>
                        <View style={styles.meanBlockPart}>
                        <Text style={styles.wordTextFirst}>The practice or skill of preparing food by combining, mixing, and heating ingredients.</Text>
                            <Text>
                                <Text style={styles.exampleTextBlue}>Example: </Text>
                                <Text style={styles.wordText}>he developed an interest in cooking.</Text>
                            </Text>
                        </View>
                        <View style={styles.meanBlockPart}>
                            <Text style={styles.wordTextFirst}>The practice or skill of preparing food by combining, mixing, and heating ingredients.</Text>
                            <Text>
                                <Text style={styles.exampleTextBlue}>Example: </Text>
                                <Text style={styles.wordText}>he developed an interest in cooking.</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.btnOrange}>
                        <Text style={styles.btnText}>Add to Dictionary</Text>
                    </Pressable>
                </View>
            </View>
            <MenuTabs activeNum={0} navigation={navigation} />
        </SafeAreaView>
    )
}