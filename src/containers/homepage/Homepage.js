import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../assets/background.svg';
//import Logo from '../../assets/logo_web.png';
//import Search from '../../assets/icon_search_white.svg';
import Favourite from '../../assets/icon_favourite_Active.svg';
import MostlySunny from '../../assets/icon_mostly_sunny.svg';
import TempIcon from '../../assets/icon_temperature_info.svg';
import PrecipitationIcon from '../../assets/icon_precipitation_info.svg';
import HumidityIcon from '../../assets/icon_humidity_info.svg';
import WindIcon from '../../assets/icon_wind_info.svg';
import VisibilityIcon from '../../assets/icon_visibility_info.svg';
import Header from '../common/Header';

const Icons = [
    {icon: TempIcon, text: 'Min - Max', value: '75⁰ - 90⁰' },
    {icon: PrecipitationIcon, text: 'Precipitation', value: '0%'},
    {icon: HumidityIcon, text: 'Humidity', value: '47%'},
    {icon: WindIcon, text: 'Wind', value: '4 mph'},
    {icon: VisibilityIcon, text: 'Visibility', value: '12 mph'}
];

const Homepage = () => {
    return (
        <Wrapper>
            <div className="container">
                <Header/>
                <div className="location">Udupi, Karnataka</div>
                <div className="favourite"><img src={Favourite} className="favourite-icon" /><span className="add-to-favourite">Add to favourite</span></div>
                <div className="weather-icon-container">
                    <img src={MostlySunny} className="weather-icon" />
                    <div className="temperature">
                        <span className="temp">87</span>
                        <span className="unit-c"><sup>0</sup>C</span>
                        <span className="unit-f"><sup>0</sup>F</span>
                    </div>
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

  .unit-c{
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

  .unit-f{
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

  .radio{
      display: none;
      :checked + label{
         height: 15px;
  color: #FFD639;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 15px
      }
  }
`;

export default Homepage;