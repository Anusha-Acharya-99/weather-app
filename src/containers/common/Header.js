import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo_web.png';
import Search from '../../assets/icon_search_white.svg';

const Header = () => {
    return (
            <Div>
                <div className="header">
                    <img src={Logo} className="Logo" />
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Search city" />
                        <img className="search-icon" src={Search} alt="search"></img>
                    </div>
                </div>
                <div className="topnavbar">
                    <ul className="navbar">
                        <Link to = '/'><input type="radio" id="home" name="navlist" className="radio" />
                        <label className="navlist" htmlFor="home">HOME</label></Link>
                        <Link to='favourite'><input type="radio" id="favourite" name="navlist" className="radio"/>
                        <label className="navlist" htmlFor="favourite">FAVOURITE</label></Link>
                        <Link to='recent-search'><input type="radio" id="recent-search" name="navlist" className="radio"/>
                        <label className="navlist" htmlFor="recent-search">RECENT SEARCH</label></Link>
                    </ul>
                    <div className="date-time">Wed, 28 Nov 2018 11:35 AM</div>
                </div>
                </Div>
    )
}

const Div = styled.div`
.header{
    display: flex;
    justify-content: space-between;
    padding-top: 43px;
    left: 0;
    right: 0;
}

.Logo{
    margin-left: 0px;
    height: 30px;
}

.search-container{
     box-sizing: border-box;
  height: 45px;
  width: 458px;
  border: 1px solid #FFFFFF;
  opacity: 0.3;
  border-radius: 3px;
  background-color: rgba(255,255,255,0.6);
  display: inline-block;
 text-align: right;
 vertical-align: middle;
}

.search-bar{
     box-sizing: border-box;
  height: 45px;
  width: 419px;
  border: none;
  background: transparent;
  padding-left: 14px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  ::placeholder{
      color: #FFFFFF;
  }
:focus {
    outline: none;
}
}

.search-icon{
    vertical-align: middle;
}

.navbar{
    list-style-type: none;
    display: flex;
    padding-left: 0px;
    margin-top: 0;
    margin-bottom: 5px;
}

.navlist{
  height: 16px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 16px;
  margin-right: 46px;
   margin-top: auto;
  margin-bottom: auto;
}

.date-time{
    height: 16px;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 0;
  margin-bottom: 5px;
}

.topnavbar{
    display: flex;
    justify-content: space-between;
    margin-top: 44px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255,255,255,0.3);
}

a{
      text-decoration: none;
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


export default Header;