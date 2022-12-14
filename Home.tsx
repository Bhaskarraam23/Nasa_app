import * as  React from "react";
import { 
    View,
    StyleSheet,
    Text,
ImageBackground } from "react-native";
import { TextInput, Button} from 'react-native-paper';
import axios from "axios";
const bg = require('./assets/first.jpg')
const { useLayoutEffect, useState } = React;

const Home = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [ astroidId, setastroidId] = useState("")
    const [items, setItems] = useState([]);
    const [error, seterror] = useState(false);
    const [Detail, setDetail] = useState({
        "id":""
    })
    
    const input = Detail?.id
    const [minValueError, setMinValueError] = useState(true)
    console.log(input)


    useLayoutEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
            .then((response) => {
                console.log(response.data)
                setDetail(response.data)
                
            })
            .catch((error) => {
                seterror(true)
            })
    }, 
    [])
    // const API_KEY = "Iz4FgVENHz381dTWsgmNr0LcSF3NgdI2Uuyie9OZ";
    // const apiUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}&apikey=${API_KEY}`;
    // const handleClick = () => {
    //      axios.get(apiUrl)
    //     .then((res) => {
    //         const result = res.data
    //         let id = result.id
    //         let name = result.name
    //         let nasa_jpl_url = result.nasa_jpl_url
    //         let is_potentially_hazardous_asteroid = result.is_potentially_hazardous_asteroid
    //         navigation.navigate('random', {
    //             id: id,
    //             name:name,
    //             nasa_jpl_url:nasa_jpl_url,
    //             is_potentially_hazardous_asteroid:is_potentially_hazardous_asteroid,

    //         })
    //     })
    //     .catch((err) => {
    //         console.log("Error", err)
    //     })

    //     }

    const errorRef = useRef(false)

    const handleButton = () => {
        navigation.push('Details', {astroidId})
    }

    const handleButton1 = () => {
        navigation.push('Random', {astroidId})
    }

    const handleChange = (value:any) => {
        if (value.length < 0) {
            setMinValueError(true)
            errorRef.current = true;
        }
        else {
            setMinValueError(false)
            errorRef.current = false;
        }
        setastroidId(value)
    }
      console.log(items);
    return (
        <>
        <ImageBackground source={bg} resizeMode='cover' style={styles.bgStyle} >
        <Text style={styles.title}>NASA App</Text>
        <View style={styles.Container}>
        <TextInput
        label="Enter Astroid ID"
        value={astroidId}
        onChangeText={handleChange}
        mode="outlined"
        />
        <Button style={{
                backgroundColor: !(astroidId) ? "#D2D3D9" : "#1996FC",marginTop:50, 
                borderRadius:5, 
                width:180, 
                justifyContent: "center", 
                alignSelf: "center"
              }} disabled={minValueError}   mode="contained" onPress={handleButton}>
        Submit
        </Button>
        <Button  style={styles.button}  mode="contained" onPress={handleButton1}>
        Random Astroid
        </Button>
        </View>
        </ImageBackground>
        </>
    );
};
const styles = StyleSheet.create({
    title:{
        fontWeight:"bold", 
        fontSize:35, 
        alignSelf: "center", 
        color:"black"},
    button:{
        backgroundColor:"#1996FC", 
        marginTop:30, 
        borderRadius:5, 
        width:180, 
        justifyContent: "center", 
        alignSelf: "center"
    },
    Container:{
        flex: 1, 
        justifyContent: "center", 
        width: "60%", 
        alignSelf: "center"
    },
    bgStyle: {
        flex: 1,
        justifyContent: "center",
        // paddingHorizontal: 30,
        height: "100%",
        width:"100%"
    },
  });
export default Home;