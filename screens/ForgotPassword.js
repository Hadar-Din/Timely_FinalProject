import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Animated
} from 'react-native';

import { sendEmail } from './SendEmail';


class ForgotPassword extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        titleText:"Forgot Password",
        submitText:"Send",
        placeHolderText:"Email Address"
    };

    constructor(props) {
        super(props);
        this.state = {
           email:""
        };
    }

    /**
     * Validate email
     */
    validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * Button submit pressed
     */
    btnSubmitPress() {
        if (this.state.email.trim().length == 0) {
            console.log("Please enter email");
          }else if(this.validateEmail(this.state.email) == false){
            console.log("Please enter valid email");
          }else {
            this.callForgotPassword();
          }
    }

    /**
     * Call your webservice for forgot pasword
     */
    callForgotPassword(){// 
        sendEmail(
            'hadar5z5z5@gmail.com',
            'We need your feedback',
            'UserName, we need 2 minutes of your time to fill this quick survey [link]',
        { cc: 'hadar5z5z5@gmail.com' }
        ).then(() => {
            console.log('Your message was successfully sent!');
        });
    }

    /**
     * Button close pressed
     */
    btnClosePress(){
        this.props.callbackAfterForgotPassword(0, this.props.otherParamsToSend);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                    <TouchableOpacity style={styles.btnClose} activeOpacity={0.6} onPress={() => this.btnClosePress()}>
                        {/* <Image source={Images.close}/> */}
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>{this.props.titleText}</Text>
                    <View style={styles.starView}>
                        <View style={styles.inputView}>
                            <TextInput style={styles.inputText} placeholder={this.props.placeHolderText}
                            multiline={false} placeholderTextColor={'#3c3c3c'} autoCapitalize={'none'} keyboardType={'email-address'} autoCorrect={false} underlineColorAndroid={'transparent'} onChangeText={(email) => this.setState({email})} value={this.state.email}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.6} onPress={() => this.btnSubmitPress()}>
                            <Text style={styles.textCancel} numberOfLines={1}>
                            {this.props.submitText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ForgotPassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:15,
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bottomView: {
        borderRadius:8,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    topContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    textHeader: {
        color: 'black',
        fontSize: 18,
        marginVertical: 8,
        alignSelf: 'center'
        // backgroundColor: 'red'
    },
    bottomContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginTop: 5,
        marginBottom: 5
    },
    dividerView: {
        backgroundColor: '#3c3c3c',
        height: 4
    },
    btnCancel: {
        backgroundColor: '#6A6A6A',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 20
    },

    textCancel: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10
    },
    btnClose: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginTop: 10,
        overflow: 'hidden',
        alignSelf: 'flex-end',
    },
    textClose: {
        color: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10
    },
    inputText: {
        paddingVertical: 5,
        color: 'black',
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'left'
    },
    inputView:{
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#3c3c3c',
        overflow: 'hidden',
    },
});