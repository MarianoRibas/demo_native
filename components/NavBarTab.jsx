import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme.js';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flexDirection:'row',
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
        paddingLeft:10
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'700'
    }

});

const NavBar = ({active, children, to}) => {
    return (
        <Link to={to}>
            <StyledText style={styles.text}>{children}</StyledText>
        </Link>
    )
};

const NavBarTab = () =>{
    return (
        <View style={styles.container}>
            <NavBar active to='/'>Home</NavBar>
        </View>
    )
}

export default NavBarTab;