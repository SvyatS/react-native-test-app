import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    prevIcon: {
        position: 'absolute',
        top: 20,
        left: 15,
        width: 48,
        height: 48
    },
    image: {
        height: 253,
        width: 343
    },
    textContainer: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    title: {
        color: '#3C3A36',
        fontSize: 24,
        margin: 8,
        lineHeight: 32,
    },
    text: {
        lineHeight: 21,
        paddingTop: 6,
        color: '#78746D',
        fontSize: 14,
    },
    signUpForm: {
        width: '100%',
        padding: 16,
        paddingBottom: 0,
    },
    input: {
        width: "100%",
        height: 53,
        color: '#78746D',
        fontSize: 14,
        padding: 16,
        borderColor: '#BEBAB3',
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 16,
    },
    btnsContainer: {
        paddingHorizontal: 16,
        width: '100%',
        paddingBottom: 39,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnOrange: {
        width: '100%',
        height: 56,
        backgroundColor: '#E3562A',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#FFF',
        fontSize: 14,
    },
    btnGray: {
        paddingTop: 16,
        color: '#78746D',
        fontSize: 14,
    },
    hidePassIconTouch: {      
        position: 'absolute',
        right: 16,
        marginTop: 15
    },
    hidePassIcon: {
        width: 24,
        height: 24,
    }
})