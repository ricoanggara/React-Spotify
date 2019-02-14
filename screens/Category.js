import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 180, width: 150, marginLeft: 15, borderWidth: 0, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 145, height: 175, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 0, paddingTop: 0 }}>
                    <Text>{this.props.name}</Text>
                    
                    <Text style={{ fontSize: 12, fontWeight: '700',textAlign:'center',color:'white' }}>
                    <Image source={require('../Images/music.png')}
                        style={{ flex: 1, width: 16, height: 16, }}
                    />  This is Marshmello
                    </Text>
                    <Text style={{ fontSize: 12, paddingHorizontal: 0,textAlign:'center',color:'grey' }}>
                        Esential Marshmello
                    </Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});