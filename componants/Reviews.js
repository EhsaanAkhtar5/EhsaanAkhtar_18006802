import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {view,ScrollView,Text,TextInput,TouchableOpacity,StyleSheet, View, SectionList,Image, FlatList} from 'react-native';








class Reviews extends Component {




    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            locationData: []
        };
    }




    
    getData(){

        return fetch("http://10.0.2.2:3333/api/1.0.0/location/1")
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
                locationData: responseJson
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }





    render()
    {
        const navigation = this.props.navigation;

        return(







            <View style={styles.container}>
                <View>

                    <FlatList
                    data={this.state.locationData}
                    renderItem={({item}) => (
                <View>
                    <Text>{item.item_name}</Text>
                </View>
                )}
                keyExtractor={({id},index) => id}
                />
                </View> 

                
                <ScrollView /*style={styles.padding}>








                <TouchableOpacity
                    onPress={() => navigation.navigate('review_page')}>
                    <Text style={{alignSelf: "center"}}>
                    Coffee Shop
                    </Text>
                    <Image style={ styles.Shops }
                    resizeMode="cover"
                    source={require('./Images/Coffee.jpg')}/>
                </TouchableOpacity>



                <TouchableOpacity
                    onPress={() => navigation.navigate('review_page')}>
                    <Text style={{alignSelf: "center"}}>
                    Coffee Shop1
                    </Text>
                    <Image style={ styles.Shops }
                    resizeMode="cover"
                    source={require('./Images/kk.jpg')}/>
                </TouchableOpacity>



                <TouchableOpacity
                    onPress={() => navigation.navigate('review_page')}>
                    <Text style={{alignSelf: "center"}}>
                    Coffee Shop2
                    </Text>
                    <Image style={ styles.Shops }
                    resizeMode="cover"
                    source={require('./Images/ll.jpg')}/>
                </TouchableOpacity>



                <TouchableOpacity
                    onPress={() => navigation.navigate('review_page')}>
                    <Text style={{alignSelf: "center"}}>
                    Coffee Shop3
                    </Text>
                    <Image style={ styles.Shops }
                    resizeMode="cover"
                    source={require('./Images/pp.jpg')}/>
                </TouchableOpacity>
*/ >
                </ScrollView >                         
            </View>
            



            
        )


    }   
}


const styles = StyleSheet.create
({


    Shops:{
        width:400,
        height:200
    },


    container: {
        flex: 10,
        paddingTop: 22
       },
    sectionHeader: {
         paddingTop: 2,
         paddingLeft: 10,
         paddingRight: 10,
         paddingBottom: 2,
         fontSize: 14,
         fontWeight: 'bold',
         backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        color:'red',
        backgroundColor:'lightblue',
        padding:10,
        fontSize:25
    }, 
    formItem: {
        padding:10
    },
    formLabel: {
        fontSize:15,
        color:'red'
    },
    formInput: {
        borderWidth:1,
        borderColor:'red',
        borderRadius:5
    },
    formTouch:{
        backgroundColor:'lightblue',
        padding:10,
        alignItems:'center'
    },
    formTouchText:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    logo: {
        width:50,
        height:50
    }
    
})

export default Reviews;