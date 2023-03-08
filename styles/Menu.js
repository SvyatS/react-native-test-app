import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 100,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        flexDirection: 'row',
        borderWidth: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderColor: '#BEBAB3',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingHorizontal: 21
    },
    dictImage: {
        height: 54,
        width: 73
    },
    trainImage: {
        height: 42,
        width: 64
    },
})