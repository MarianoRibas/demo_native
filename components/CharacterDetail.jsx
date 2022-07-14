import React from 'react'
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import StyledText from './StyledText';
import {Link} from 'react-router-native'
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getDetail, deleteDetail } from '../actions';



export default function CharacterDetail () {
    const charId = useParams();
    const dispatch = useDispatch();
    charId.toString();
    useEffect(() => {dispatch(deleteDetail())}, [])
    useEffect(() =>{dispatch(getDetail(charId.id))}, [dispatch]);
    const detailCharacter = useSelector((state) => state.detail);
    return (
        <ScrollView>
            
            <Text style={{color:'white', fontSize:40}}>________________</Text>
            {
                Object.keys(detailCharacter).length > 0? 
                
                    <View>
                        <Image
                        style={{width:150, height:150}} 
                        source={{
                        uri: `${detailCharacter.image}`
                        }}/>
                        <Text>{detailCharacter.name}</Text>
                        
                        <Text>GENDRE: {detailCharacter.gender}</Text>
                        <Text>STATUS: {detailCharacter.status}</Text>
                    </View>
               
                : <Text>Loading...</Text>
            }


        </ScrollView>
    )
}