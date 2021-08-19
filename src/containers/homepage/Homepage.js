import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ApiKey } from '../../services/ApiKey';
import Image from '../../assets/background.svg';
import NothingIcon from '../../assets/icon_nothing.svg';
import Favourite from '../../assets/icon_favourite.svg';
import FavouriteActive from '../../assets/icon_favourite_Active.svg';
import TempIcon from '../../assets/icon_temperature_info.svg';
import PrecipitationIcon from '../../assets/icon_precipitation_info.svg';
import HumidityIcon from '../../assets/icon_humidity_info.svg';
import WindIcon from '../../assets/icon_wind_info.svg';
import VisibilityIcon from '../../assets/icon_visibility_info.svg';
import Header from '../common/Header';
import Sunny from '../../assets/icon_mostly_sunny.svg';
import Rain from '../../assets/icon_rain_big.svg';
import MostlyCloudy from '../../assets/icon_mostly_cloudy_big.svg';
import PartlyCloudy from '../../assets/icon_partially_cloudy_big.svg';
import Thunderstorm from '../../assets/icon_thunderstorm_big.svg';
import Clear from '../../assets/icon_clear_night.svg';


const Homepage = () => {
    const [location, setLocation] = useState('')
    const [unit, setUnit] = useState('metric')
    const [city, setCity] = useState('');
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [Fav, setFav] = useState([]);
    const [favIcon, setFavIcon] = useState();
    const [localList, setLocalList] = useState(localStorage.getItem('Favourites')?.split(','));
    const [icon, setIcon] = useState();
    var loc;


    const currentLocation = (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    }

    const getDetails = async () => {
        try {
            await window.navigator.geolocation.getCurrentPosition(currentLocation);
            const response = location === '' ? await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&appid=${ApiKey}`) : await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${ApiKey}`).catch((error) => console.log(error));
            (response === undefined) ? setCity('error') : setCity(response.data);
            console.log(response.data);
            loc = response.data.name;
            const id = response.data.weather[0].id;
            console.log(id);
            if (id >= 200 && id <= 232) {
                setIcon(Thunderstorm);
                console.log('Thunder');
            }
            else if (id >= 300 && id <= 531) {
                setIcon(Rain);
                console.log('Rain');
            }
            else if (id === 800) {
                setIcon(Clear);
                console.log('Clear');
            }
            else if (id === 801 || id === 802) {
                setIcon(PartlyCloudy);
                console.log('PartlyCloudy');
            }
            else if (id === 803 || id === 804) {
                setIcon(MostlyCloudy);
                console.log('Mostly cloudy');
            }
            else {
                setIcon(Sunny);
                console.log('Sunny');
            }
        }
        catch (err) {
            console.error(err);
        }
        }
    
    useEffect(() => getDetails(), [lat, long, unit, location, favIcon]);

    const Icons = [
    {icon: TempIcon, text: 'Min - Max', value: `${city.main?.temp_min}⁰ - ${city.main?.temp_max}⁰` },
    {icon: PrecipitationIcon, text: 'Precipitation', value: '0%'},
    {icon: HumidityIcon, text: 'Humidity', value: `${city.main?.humidity}`},
    {icon: WindIcon, text: 'Wind', value: `${city.wind?.speed} mph`},
    {icon: VisibilityIcon, text: 'Visibility', value: `${city.visibility} mph`}
    ];

    const handleUnitChange = (e) => {
        document.getElementById(e.target.id).className = 'select';
        e.target.nextSibling === null ? e.target.previousSibling.className = 'unselect' : e.target.nextSibling.className = 'unselect';
        e.target.id === 'fahrenheit' ? setUnit('imperial') : setUnit('metric');
    }

    const handleChange = (value) => {
        setLocation(value);
        handleFavOnSearch();
    }

    const handleFavOnSearch = () => {
        if (localList.includes(loc) || Fav.includes(loc)) {
            setFavIcon(FavouriteActive);
        }
        else setFavIcon(Favourite);
    }

    const handleFavourite = () => {
        if (favIcon === Favourite) {
            setFav([...Fav, city.name]);
            setFavIcon(FavouriteActive);
        }
        else {
            setLocalList(localList.filter((element) => element !== city.name));
            setFav(Fav.filter((element) => element !== city.name));
            setFavIcon(Favourite);
        }
    }

    if (localList && localList[0] !== "") {
    const data = new Set([...new Set(localList), ...new Set(Fav)]);
     localStorage.setItem('Favourites', Array.from(data));
    }
    else {
        localStorage.setItem('Favourites', Fav);
    }
    console.log(icon);
    console.log(location);

    return (
        <Wrapper>
            <div className="container">
                <Header handleChange={handleChange} />  
                {city === 'error' ?
                    <div className="invalid-city">
                        <img src={NothingIcon} className="icon-nothing" />
                        <div className="invalid-city-msg">Invalid city name</div>
                    </div>
                    :
                    <>
                <div className="location">{ city.name}</div>
                        <div className="favourite"><img src={localStorage.getItem('Favourites')?.split(',').includes(city.name) || Fav.includes(city.name) ? FavouriteActive : Favourite} className="favourite-icon" onClick={ handleFavourite}/><span className="add-to-favourite">Add to favourite</span></div>
                <div className="weather-icon-container">
                            <img src={icon} className="weather-icon" />
                    <div className="temperature">
                        <span className="temp">{city.main?.temp}</span>
                        <span className="select" id="celsius" onClick = {handleUnitChange}>⁰C</span>
                        <span className="unselect" id="fahrenheit" onClick = {handleUnitChange}>⁰F</span>
                    </div>
                    <div className="weather-condition">{ city.weather !== undefined?  city.weather[0].description : null}</div>
                    <div className="flex-display">
                    {Icons.map((icon, index) => {
                        return (
                            <span className="inner-flex-display">
                                <img src={icon.icon} className="icon-img"/>
                                <span className="icons-list">
                                    <span className="icon-text">{icon.text}</span>
                                    <span className="icon-value">{icon.value}</span>
                                </span>
                            </span>
                        )
                    })}
                        </div>
                        </div>
                        </>
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-image: url(${Image});
height: 100vh;
width: 100wh;
background-size: cover;

.container{
    margin-left: 120px;
    margin-right: 120px;
}

.invalid-city{
    text-align: center;
    margin-top: 176px;
}

.invalid-city-msg{
    margin-top: 25px;
    height: 21px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
}

.location{
    height: 24px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  margin-top: 47px;
}

  .add-to-favourite{
     height: 15px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 15px;
  margin-left: 7px;
  }

  .favourite{
      margin-top: 20px;
  }

  .favourite-icon{
    vertical-align: middle;
  }

  .weather-icon{
       margin-top: 22px;
  }

  .weather-icon-container{
      text-align: center;
  }

  .temperature{
      margin-top: 15px;
  }

  .temp{
      height: 75px;
  width: 73px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 64px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 75px;
  }

  .select{
      height: 19px;
  width: 11px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
  border-radius: 2px 0 0 2px;
  }

  .unselect{
      height: 19px;
  width: 9px;
  color: #E32843;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
  border-radius: 2px;
  background-color: #FFFFFF;
  }

  .weather-condition{
      height: 25px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 25px;
  text-align: center;
  }

  .icons-list{
      display: flex;
      flex-direction: column;
  }

  .flex-display{
      display: flex;
      flex-direction: row;
      justify-content: center;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      padding-top: 35px;
      margin-top: 66px;
      
      padding-left: 80px;
      padding-right: 80px;
  width: 960px;
  border-top: 1px solid rgba(255,255,255,0.3);
  }

  .inner-flex-display{
      display: flex;
      flex-direction: row;
  }

  .icon-img{
      padding-right: 15.5px;
  }

  .icon-text{
      height: 18px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  }

  .icon-value{
       height: 25px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 25px;
  padding-top: 6px;
  }

  .icons-list{
      text-align: left;
  }
`;

export default Homepage;