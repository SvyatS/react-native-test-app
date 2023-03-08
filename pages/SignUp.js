import { View, Text, Image, Pressable, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import React, { useState } from 'react';
import { ImageAssets } from "../assets/ImagesAssets";
import { styles } from '../styles/SignUp'

export default function SignUp ({ navigation }) {
    const [hidePass, setHidePass] = useState(true);

    const validateData = (values) => {
        let errorStr = ''
        Object.keys(values).forEach((key) => {
            if (values[key].length == 0) errorStr += `${key} is empty\n`
        })

        if (errorStr.length > 0) {
            alert(errorStr)
            return 1
        }

        navigation.navigate('Dictionary')
    }

    return (
        <SafeAreaView style={styles.main}>
             <TouchableHighlight
                style={styles.prevIcon} 
                onPress={() => navigation.navigate('Intro-3')}>
                    <Image style={styles.prevIcon} source={ImageAssets.prevIcon} />
            </TouchableHighlight>
            <View>
                <Image style={styles.image} source={ImageAssets.signUp} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.text}>Create your account</Text>
            </View>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => validateData(values)}>
               {(props) => (
                    <View style={styles.signUpForm}>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name}
                            placeholder="Name"
                            onChangeText={props.handleChange('name')}/>
                        <TextInput 
                            style={styles.input}
                            value={props.values.email}
                            placeholder="E-mail"
                            onChangeText={props.handleChange('email')}/>
                        <View>
                            <TextInput
                                secureTextEntry={hidePass}
                                style={styles.input} 
                                value={props.values.password}
                                placeholder="Password"
                                onChangeText={props.handleChange('password')}/>

                            <TouchableHighlight 
                                style={styles.hidePassIconTouch}
                                onPress={() => setHidePass(!hidePass)}
                                >
                                    <Image 
                                        style={styles.hidePassIcon} 
                                        source={hidePass ? ImageAssets.hidePass : ImageAssets.showPass} 
                                        />
                            </TouchableHighlight>
                            
                        </View>
                        <View style={styles.btnsContainer}>
                            <Pressable style={styles.btnOrange} onPress={props.handleSubmit}>
                                <Text style={styles.btnText}>Sign up</Text>
                            </Pressable>
                            <Text style={styles.btnGray}>Log in</Text>
                        </View> 
                    </View>
               )}
            </Formik>
            
        </SafeAreaView>
    )
}