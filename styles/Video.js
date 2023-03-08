import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    webView: {
        width: '100%',
        height: '100%',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
    }
})