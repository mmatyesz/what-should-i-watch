import React from 'react';
import {useState, useEffect} from 'react';
import Git from './github.png'
import Insta from './instagram.png'
import TikTok from './tiktok.png'
import { HashLink as Link } from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';


function Generator(){
    useEffect(() => {
        fetchItems();
    },[]);

    const[anime, setAnime] = useState([]);

    /*-----------------------------------------BEOLVASÁS-------------------------------------------*/

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
    }
    

    /*--------------------------------------------------------------------------------------------*/

    

    
        let y = Math.floor(Math.random() * 100);
        const titles = anime.map(cim => cim.title);
        const randomAnime = titles.map(x => titles[y]);
    
        const sypnos = anime.map(sypno => sypno.synopsis);
        const randomSypno = sypnos.map(z => sypnos[y]);

        const episodes = anime.map(epizod => epizod.episodes);
        const randomEpisodes = episodes.map(a => episodes[y]);

        const images = anime.map(image => image.image_url);
        const randomImage = images.map(b => images[y]);

        const ratings = anime.map(rating => rating.score);
        const randomRating = ratings.map(c => ratings[y]);

        const links = anime.map(link => link.url);
        const randomLink = links.map(d => links[y]);

        const airings = anime.map(airing => airing.airing_start);
        const randomAiring = airings.map(e => airings[y].substring(0,10));

        console.log(anime);

        const [show, setShow] = useState(true);

        
    
  return (
    <div className="App">
        
        <div className="container1">
            <h1>WHAT SHOULD I WATCH</h1>
            
            <h2 style={{ content: show ? "block" : "none" }}>{randomAnime[y]}</h2>

            
            <button onClick={() => setShow((s) => !s)}>GENERATE NEW</button>
            
            <div className="scroll4more">
                <Router>
                <Link smooth to="/#cim"><h4>SCROLL FOR MORE INFORMATION</h4></Link><ion-icon name="chevron-down-outline"></ion-icon>
                </Router>
            </div>


        </div>

        <div className="container2">
            <h1 className="infoTitle"  id="cim">{randomAnime[y]}</h1>
            <h2 className="infoSynop">{randomSypno[y]}</h2>
            <div className="image_stats">
                <div className="image">
                    <img src={randomImage[y]}></img>
                </div>
                <div className="stats">
                    <h3><b>Episodes: </b>{randomEpisodes[y]}</h3>
                    <h3><b>Rating: </b>{randomRating[y]}/10</h3>    
                    <h3><b>Airing start: </b>{randomAiring[y]}</h3>      
                    <h3><b>MyAnime: </b><a href={randomLink[y]} target="_blank">[LINK]</a></h3>
                </div>
            </div>
            <div className="socials">
                <a  href="https://github.com/mmatyesz" target="_blank"><img src={Git} width="38px"/></a>
                <a  href="https://www.instagram.com/girls.love.matyesz/" target="_blank"><img src={Insta} width="38px"/></a>
                <a  href="https://www.tiktok.com/@mmatyesz" target="_blank"><img src={TikTok} width="38px"/></a>
            </div>
        </div>

    </div>
  );
        
}

export default Generator;