import * as React from "react";
import {Text, SafeAreaView,StyleSheet, View, ImageBackground } from "react-native";
import axios from "axios";
const bg = require('../my-app/assets/nasa.png')


const Details = ({route, navigation}:any) =>{
    const {astroidId}= route.params
    const { useLayoutEffect, useState } = React;
    const [error, seterror] = useState(false);
    const [random_id, setrandom_id] = useState('')
    const [Detail, setDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid": "",
    })

    
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
    // React.useEffect(() => {
    //     async function fetchData() {
    //       var data = await fetch(apiUrl).then(res => {
    //         return res.json();
    //       });
    //       console.log(data);
    //       setItems(data);
    //       console.log(data);
    //     }
    //     fetchData();
    //   }, []);

    // const Astroid_data = async () => {
    //     console.log('Astroid_data')
    //     const response = await fetch  (`https://api.nasa.gov/neo/rest/v1/neo/${astroidId}?api_key=b6VIvVEtwrIksMntZVFNG3DptETMKJzALjvZ5djH`);
    //     const jsonData = await response.json()
    //     setDetail(jsonData.Detail)
    //   };
    //   useEffect(() => {
    //     Astroid_data()
    //     console.log('data', Astroid_data)
    //   }, []);
    // useLayoutEffect(() => {
    //         axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${astroidId}?api_key=b6VIvVEtwrIksMntZVFNG3DptETMKJzALjvZ5djH`)
    //             .then((response) => {
    //                 console.log(response.data)
    //                 setDetail(response.data)
    //             })
    //             .catch((error) => {
    //                 if(axios.isAxiosError(error)){
    //                     console.log("ERROR:check axios:", error.message);
    //                     return '404';
    //                 }else{
    //                     console.log("ERROR: something else", error);
    //                     return "404"
    //                 }
    //             })
    //     }, 
    //     [])

    useLayoutEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=b6VIvVEtwrIksMntZVFNG3DptETMKJzALjvZ5djH`)
            .then((response) => {
                
                // // console.log(randomAstroid)
                // // @ts-ignore
                // const arrayOfID = response["near_earth_objects"];

                //  // @ts-ignore
                // const allAsteroidID = arrayOfID.map(obj => obj.id)
                // const randomIdx = Math.floor(Math.random() * allAsteroidID.length)
                // const RANDOM_ASTROID_ID = allAsteroidID[randomIdx];
                const dict = response.data.near_earth_objects;
                const RANDOM_ASTROID_ID = dict[Math.floor(Math.random()*dict.length)]
                setDetail(RANDOM_ASTROID_ID)
            })
            .catch((error) => {
                if(axios.isAxiosError(error)){
                    console.log("ERROR:check axios:", error.message);
                    return '404';
                }else{
                    console.log("ERROR: something else", error);
                    return "404"
                }
            })
    }, 
    [])
    // console.log()
    let isValid = Detail?.is_potentially_hazardous_asteroid;
    let m = isValid.toString();
        
    return (
        
        <ImageBackground source={bg} resizeMode='cover' style={styles.bgStyle} >
            {/* <View> */}
        <SafeAreaView style={styles.Container}>
        <Text style={styles.title}>About Asteroid</Text>
        <Text style={{fontSize:20,padding:15,marginTop:20,}}>ID : {Detail?.id}</Text>
        <Text style={{fontSize:20,padding:15}}>Name : {Detail?.name}</Text>
        <Text style={{fontSize:20,padding:15}}>NASA JPL URL : {Detail?.nasa_jpl_url}</Text>
        <Text style={{fontSize:20,padding:15}}>Is Potentially Hazardous Asteroid: {m}</Text>
         </SafeAreaView>
         {/* </View> */}
          </ImageBackground>
         
        
       
    );
};
const styles = StyleSheet.create({
    Container:{
        flex: 1, 
        width: "90%", 
        alignSelf: "center"
    },
    title:{
        fontWeight:"bold", 
        fontSize:30, 
        alignSelf: "center", 
        color:"black"
        
    },
    bgStyle: {
        flex: 1,
        justifyContent: "center",
        // paddingHorizontal: 30,
        height: "100%",
        width:"100%"
    },


});
export default Details;
