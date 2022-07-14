import React from 'react'
import Constants from 'expo-constants'
import {Text, View,Button} from 'react-native'
import CharacterList from './CharacterList'
import CharacterDetail from './CharacterDetail'
import NavBarTab from './NavBarTab'
import {Switch, Route, Routes} from 'react-router-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllCharacters, deleteAllCharacters } from '../actions';

const Main = () => {
    const dispatch = useDispatch();

    return (
        <View style={{
            margintop:`${Constants.statusBarHeight}`,
            }}>
            <NavBarTab />
            
            <Routes>
                <Route exact path = "/" element={<CharacterList/>}/>
                <Route exact path = "/detail/:id" element={<CharacterDetail/>}/>
            </Routes>
        </View>
    )

}

export default Main;

