import { View, Text, Image, Pressable, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import { WebView } from 'react-native-webview';
import React, { useRef } from 'react'
import { styles } from '../styles/Video'
import MenuTabs from '../components/MenuTabs'

export default function Video ({ navigation }) {
    const webViewRef = useRef()
    const uri = 'https://learnenglish.britishcouncil.org/general-english/video-zone'

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.webView} >
                <WebView 
                source={{ uri: uri }}
                onContentProcessDidTerminate={() => webViewRef.current.reload()}
                ref={webViewRef}
                onNavigationStateChange={({ url, canGoBack }) => {
                    if (!url.startsWith(uri)) {
                        webViewRef.current.goBack();
                    }
                  }}
                 />
            </View>
            <MenuTabs activeNum={2} navigation={navigation} />
        </SafeAreaView>
    )
}