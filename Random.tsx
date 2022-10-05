import * as React from "react";
import {Text, SafeAreaView,StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";


const Details = ({route, navigation}:any) =>{
    const {input}= route.params
    const { useLayoutEffect, useState } = React;
    const [error, seterror] = useState(false);
    const [random_id, setrandom_id] = useState('')
    const [items, setItems] = useState({
      "id":""
    });
    const [Detail, setDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid":""
    })
    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try {
    //       const fetchingPosts = await fetch("https://api.nasa.gov/neo/rest/v1/neo/${id}&apikey=${API_KEY}");
    //       const posts = await fetchingPosts.json();
  
    //       setItems(posts);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   fetchPosts();
    // }, []);

    // const handleClick1 = () => {
    // const random = items[Math.floor(Math.random() * items.length)];
    // setItems(random);
    // };
    // var min = 2000000;
    // var max = 3000000;
    // var num = Math.floor(Math.random() * min) + max;
    // const api_random = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';
    // const API_KEY = "Iz4FgVENHz381dTWsgmNr0LcSF3NgdI2Uuyie9OZ";
    // const apiUrl = ``;
    const handleClick = () => {
         axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
         .then((res) => {
          const result = res.data
          let random = result.id
            })
       }
    //     .catch((err) => {
    //         console.log("Error", err)
    //     })

    //     }
    // React.useEffect(() => {
    //     async function fetchData() {
    //       var data = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
    //       .then(res => {
    //         return res.json();
    //       });
    //       console.log(data);
    //       setItems(data);
    //       console.log(data);
    //     }
    //     fetchData();
    //   }, []);
    
      useLayoutEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${input}?api_key=b6VIvVEtwrIksMntZVFNG3DptETMKJzALjvZ5djH`)
            .then((response) => {
                console.log(response.data)
                setDetail(response.data)
                
            })
            .catch((error) => {
                seterror(true)
            })
    }, 
    [])
    return (
        <SafeAreaView style={styles.Container}>
        <Text style={styles.title}>About Asteroid</Text>
        <Text style={{fontSize:20,padding:15,marginTop:20,}}>ID : {Detail?.id}</Text>
        <Text style={{fontSize:20,padding:15}}>Name : {Detail?.name}</Text>
        <Text style={{fontSize:20,padding:15}}>NASA JPL URL : {Detail?.nasa_jpl_url}</Text>
        <Text style={{fontSize:20,padding:15}}>Is Potentially Hazardous Asteroid: {Detail?.is_potentially_hazardous_asteroid}</Text>
        </SafeAreaView>
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
        
    }


});
export default Details;
