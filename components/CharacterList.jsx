import React from 'react'
import {Text, View, FlatList, Button,ScrollView} from 'react-native'
import characters from '.././data/repositories.js'
import Character from './Character.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllCharacters, deleteAllCharacters } from '../actions';


const CharacterList = () => {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.characters)
    return (
        
        // <FlatList 
        //     data={characters}
        //     style={{marginLeft:'30%'}}
        //     ItemSeparatorComponent={() =><Text> </Text>}
        //     renderItem={({item: char}) => (
                
        //         <Character {...char} />
                
                  
        //     )}
        // >
          
        // </FlatList>
        <ScrollView>
            <Button 
                title='DELETE'
                color={'red'}
                onPress={
                    () => {dispatch(deleteAllCharacters())}
                }
            />
            <Button 
                title='LOAD'
                color={'grey'}
                onPress={
                    () => {dispatch(getAllCharacters())}
                }
            />
            {
                allCharacters.map((e,index) => (
                    <View key={index}>
                        <Character 
                        id={e.id}
                        name={e.name}
                        image={e.flagImg}
                        continent={e.continent}
                        />
                    </View>
                    )
                )
            }
  
        </ScrollView>
    )
};

export default CharacterList;