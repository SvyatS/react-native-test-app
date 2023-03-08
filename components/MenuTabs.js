import { View, Image, TouchableHighlight } from "react-native";
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/Menu'

export default function MenuTabs (props) {
    return (
        <View style={styles.menu}>
            <TouchableHighlight 
                style={styles.imageContainer}
                onPress={() => props.navigation.navigate('Dictionary')}>
                <Image
                    style={styles.dictImage}
                    source={props.activeNum === 0 ? ImageAssets.menu.dictActive : ImageAssets.menu.dict}/>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Training')}>
                <Image
                    style={styles.trainImage}
                    source={props.activeNum === 1 ? ImageAssets.menu.trainActive : ImageAssets.menu.train}/>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Video')}>
                <Image
                    style={styles.trainImage}
                    source={props.activeNum === 2 ? ImageAssets.menu.videoActive : ImageAssets.menu.video}/>
            </TouchableHighlight>
        </View>
    )
}