import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Image from '../../assets/background.svg';
import NothingIcon from '../../assets/icon_nothing.svg';
import MostlySunny from '../../assets/icon_mostly_sunny.svg';
import FavActive from '../../assets/icon_favourite_Active.svg';

const FavouriteList = [
    { location: 'Udupi, Karnataka', icon: MostlySunny, temp: '31', text: 'Mostly Sunny', favicon: FavActive },
{location: 'Bangalore, Karnataka', icon: MostlySunny, temp: '29', text: 'Rain', favicon: FavActive}];

const Favourite = () => {

    const handleRemove = () => {
        document.getElementById('hide-list').className = 'remove-favourites';
        document.getElementById('NO').className = 'unclick-res';
        document.getElementById('YES').className = 'unclick-res';
    }

    const handleSelect = (e) => {
        console.log(e.target.id);
        document.getElementById(e.target.id).className = 'click-res';
        setTimeout(() => document.getElementById('hide-list').className = 'hidden', 1000);
    }

    return (
         <Wrapper>
            <div className="container">
                <Header />
                {
                    FavouriteList.length === 0 ?
                        <div className="no-favourites">
                            <img src={NothingIcon} className="icon-nothing"/>
                            <div className="no-favourites-msg">No Favourites added</div>
                        </div>
                        :
                        <div>
                        <div className= "first-row">
                            <div className="list-length">{FavouriteList.length} City added as favourite</div>
                            <div className="remove" onClick = {handleRemove }>Remove all</div>
                            </div>
                            <div className="table">
                            {FavouriteList.map((fav, index) => {
                                return(<span className="fav-details-list">
                            <span className="fav-location">{fav.location}</span>
                                    <img src={fav.icon} className="fav-icon" />
                                    <span className = "temperature">
                                    <span className="fav-temp">{fav.temp}</span>
                                        <span className="unit">⁰C</span>
                                        </span>
                            <span className="fav-text">{fav.text}</span>
                            <img src={fav.favicon} className="fav-favicon"/>
                        </span>)
                            })}
                            </div> 
                        </div>
                }
                <div className="hidden" id="hide-list">
                    <div className="remove-confirm">Are you sure want to remove all the favourites?</div>
                    <div className="yes-no">
                        <div className="unclick-res" onClick={handleSelect} id="NO">NO</div>
                        <div className="unclick-res" onClick={handleSelect} id="YES">YES</div>
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

.no-favourites{
    text-align: center;
    margin-top: 176px;
}

.no-favourites-msg{
    margin-top: 25px;
    height: 21px;

  color: #FFFFFF;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
}

.first-row{
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    height: 15px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 15px;
}

.fav-details-list{
    width: 100%;
    height: 73px;
  background-color: rgba(255,255,255,0.1);
  margin-bottom: 1px;
    display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr 3fr 0.5fr;
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

.table{
    margin-top: 16px;
}

.remove-favourites{
    height: 210px;
  width: 458px;
  border-radius: 2px;
  background-color: #FFFFFF;
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 0 0 100vmax rgba(0,0,0,.5);
}

.remove-confirm{
    height: 18px;
  color: #000000;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  margin-top: 58px;
}

.yes-no{
    display: flex;
    justify-content: center;
}

.click-res{
    box-sizing: border-box;
  border-radius: 2px;
  width: 106px;
  background-color: #F76B1C;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  padding: 9px 40px;
  margin-top: 70px;
  text-align: center;
}

.unclick-res{
    box-sizing: border-box;
height: 18px;
  color: #000000;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  padding: 9px 40px;
   margin-top: 70px;
  text-align: center;
}

.hidden{
    display: none;
}
`;

export default Favourite;