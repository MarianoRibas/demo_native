import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native';
import StyledText from './StyledText';
import {Link} from 'react-router-native'


export default function Character ({id, name, image, continent}) {
    

return (
        <View style={{
                    padding:20,
                }}>
                    <Link to={`/detail/${id}`}>
                    <Image
                        style={{width:100, height:100}} 
                        source={{
                        uri: `${image}`
                    }}/>
                    </Link>
                    {/* <StyledText color='primary' fontSize='subheading'>{name}</StyledText> */}
                    <Text>{name}</Text>
                    <StyledText color='secondary'>ID:{id}</StyledText>
                    <StyledText color='secondary'>GENRE:{continent}</StyledText>

        </View>
    )

};


const styles = StyleSheet.create({
    container:{
        color: 'white',
        fontWeight:'bold', 
        marginBottom:5
        }
})

