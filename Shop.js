import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const[anime, setAnime] = useState([]);
    const[titles, setTitles] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "722f4532eemsh149f6e69c368806p159a65jsncb190db4a3ca"
            }
        })

        const anime = await data.json();
        
        setAnime(anime.top);
        console.log(anime);

        var x = []
        for(var i = 0; i < 10 ;i++){
            x[i] = anime.top[i].title;
        }
        const titles = x;
        setTitles(x);
        console.log(x);
    }

  return (
    <div className="App">
        {titles.map(item => (
            <h2>{item}</h2>
        ))}
    </div>
  );
}

export default Shop;
