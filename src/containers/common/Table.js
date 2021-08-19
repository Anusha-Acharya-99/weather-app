import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import FavouriteActive from '../../assets/icon_favourite_Active.svg';
import Favourite from '../../assets/icon_favourite.svg';
import Sunny from '../../assets/icon_mostly_sunny.svg';
import Rain from '../../assets/icon_rain_big.svg';
import MostlyCloudy from '../../assets/icon_mostly_cloudy_big.svg';
import PartlyCloudy from '../../assets/icon_partially_cloudy_big.svg';
import Thunderstorm from '../../assets/icon_thunderstorm_big.svg';
import Clear from '../../assets/icon_clear_night.svg';
//import Favourite from '../favourite/Favourite';

const Table = ({ list }) => {
  let location = useLocation();
  
    return (
        <Wrapper>
        {list.map((fav, index) => {
          var id = fav.weather[0].id;
          console.log(id);
              if (id >= 200 && id <= 232) {
                var icon = Thunderstorm;
                console.log('Thunder');
            }
            else if (id >= 300 && id <= 531) {
                var icon = Rain;
                console.log('Rain');
            }
            else if (id === 800) {
               var icon = Clear;
                console.log('Clear');
            }
            else if (id === 801 || id === 802) {
                var icon = PartlyCloudy;
                console.log('PartlyCloudy');
            }
            else if (id === 803 || id === 804) {
                var icon = MostlyCloudy;
                console.log('Mostly cloudy');
            }
            else {
                var icon = Sunny;
                console.log('Sunny');
            }
                return (<span className="fav-details-list">
                    <span className="fav-location">{fav.name}</span>
                    <img src={icon} className="fav-icon" />
                    <span className="temperature">
                        <span className="fav-temp">{fav.main?.temp}</span>
                        <span className="unit">⁰C</span>
                    </span>
                    <span className="fav-text">{fav.weather?.description}</span>
                    <img src={localStorage.getItem('Favourites').split(',').includes(fav.name) ? FavouriteActive : Favourite} className="fav-favicon" />
                </span>)
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 16px;

    .fav-details-list{
    width: 100%;
    height: 73px;
  background-color: rgba(255,255,255,0.1);
  margin-bottom: 1px;
    display: grid;
  grid-template-columns: 30% 10% 5% 30% 10%;
  justify-content: center;
  align-items: center;
   grid-column-gap: 20px;
}

.fav-icon{
    vertical-align: middle;
    place-self: center;
    height: 36px;
  width: 38px;
}

.fav-favicon{
    vertical-align: middle;
    place-self: center;
}

.fav-location{
    height: 19px;
  width: 154px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 19px;
  margin-left: 15px;
}

.fav-temp{
    height: 38px;
  width: 37px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 38px;
}

.unit{
height: 19px;
  width: 11px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  margin-left: 4px;
}

.fav-text{
    height: 21px;
  width: 108px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
}

.temperature{
  place-self: center;
}

`;

export default Table;