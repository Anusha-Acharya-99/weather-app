import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Table from '../common/Table';
import Image from '../../assets/background.svg';
import NothingIcon from '../../assets/icon_nothing.svg';
import MostlySunny from '../../assets/icon_mostly_sunny.svg';
import FavActive from '../../assets/icon_favourite_Active.svg';

const RecentSearchList = [
    { location: 'Udupi, Karnataka', icon: MostlySunny, temp: '31', text: 'Mostly Sunny', favicon: FavActive },
{location: 'Bangalore, Karnataka', icon: MostlySunny, temp: '29', text: 'Rain', favicon: FavActive}];

const RecentSearch = () => {
    const handleRemove = () => {
        document.getElementById('hide-recent-list').className = 'remove-recent-search';
        document.getElementById('no').className = 'unclick-rec-res';
        document.getElementById('yes').className = 'unclick-rec-res';
    }

    const handleSelect = (e) => {
        console.log(e.target.id);
        document.getElementById(e.target.id).className = 'click-rec-res';
        setTimeout(() => document.getElementById('hide-recent-list').className = 'hidden-list', 1000);
    }
    return (
        <Wrapper>
            <div className="container">
                <Header />
                {
                    RecentSearchList.length === 0 ?
                        <div className="no-recent-search">
                            <img src={NothingIcon} className="icon-nothing" />
                            <div className="no-recent-search-msg">No Recent Search</div>
                        </div>
                        :
                        <div>
                            <div className="first-row">
                                <div className="list-length">You recently searched for</div>
                                <div className="clear" onClick={handleRemove}>Clear all</div>
                            </div>
                            <Table list={RecentSearchList} />
                        </div>
                }
                <div className="hidden-list" id="hide-recent-list">
                    <div className="clear-confirm">Are you sure want to clear recent searches?</div>
                    <div className="yes-no">
                        <div className="unclick-rec-res" onClick={handleSelect} id="no">NO</div>
                        <div className="unclick-rec-res" onClick={handleSelect} id="yes">YES</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )}

const Wrapper = styled.div`
background-image: url(${Image});
height: 100vh;
width: 100wh;
background-size: cover;

.container{
    margin-left: 120px;
    margin-right: 120px;
}

.no-recent-search{
    text-align: center;
    margin-top: 176px;
}

.no-recent-search-msg{
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

.remove-recent-search{
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

.clear-confirm{
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

.click-rec-res{
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

.unclick-rec-res{
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

.hidden-list{
    display: none;
}
`;

export default RecentSearch;