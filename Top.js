import React, {useState, useEffect} from 'react';
import './App.css';

function Top() {

    useEffect(() => {
        fetchItems();
    },[]);

    const[anime, setAnime] = useState([]);


    const fetchItems = async () => {
        const data = await fetch("https://jikan1.p.rapidapi.com/genre/anime/1/1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "722f4532eemsh149f6e69c368806p159a65jsncb190db4a3ca"
            }
        })

        const anime = await data.json();
        
        var i = 0;
        while(i < 1){
            setAnime(anime.anime);
            i++;
        }
        console.log(anime.anime);
    }
  return (
    <div className="App">
        {anime.map(item => (
            <div className="cards">
                <h2>{item.title}</h2>
                <div className="desc">
                <p>{item.synopsis}</p>
                <img src={item.image_url}/></div>
            </div>
        ))}
    </div>
  );

}

export default Top
