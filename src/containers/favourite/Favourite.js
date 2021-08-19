import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../common/Header";
import Table from "../common/Table";
import { ApiKey } from "../../services/ApiKey";
import Image from "../../assets/background.svg";
import NothingIcon from "../../assets/icon_nothing.svg";
import axios from "axios";
import { useHistory } from "react-router";

const Favourite = () => {
  const FavouriteList = useRef([]);
  const [favList, setFavlist] = useState(
    localStorage.getItem("Favourites")?.split(",")
  );
  const history = useHistory();

  console.log(favList);

  if (favList) {
    const lists = favList.map((fav) => {
      return axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${fav}&units=metric&appid=${ApiKey}`
        )
        .then((res) => res.data)
        .catch((e) => console.error(e));
    });
    Promise.all(lists).then((res) => {
      FavouriteList.current = res;
    });
  }

  console.log(FavouriteList.current);
  const handleRemove = () => {
    document.getElementById("hide-list").className = "remove-favourites";
    document.getElementById("NO").className = "unclick-res";
    document.getElementById("YES").className = "unclick-res";
  };

  const handleSelect = (e) => {
    document.getElementById(e.target.id).className = "click-res";
    if (e.target.id === "YES") {
      localStorage.removeItem("Favourites");
      setFavlist([]);
      window.location.reload(true);
    }
    setTimeout(
      () => (document.getElementById("hide-list").className = "hidden"),
      1000
    );
  };

  const handleChange = (value) => {
    history.push({pathname : "/", state: {value : value}});
    
  };

  return (
    <Wrapper>
      <div className="container">
        <Header handleChange={handleChange} />
        {FavouriteList.current.length === 0 ? (
          <div className="no-favourites">
            <img src={NothingIcon} className="icon-nothing" />
            <div className="no-favourites-msg">No Favourites added</div>
          </div>
        ) : (
          <div>
            <div className="first-row">
              <div className="list-length">
                {FavouriteList.current.length} City added as favourite
              </div>
              <div className="remove" onClick={handleRemove}>
                Remove all
              </div>
            </div>
            <Table list={FavouriteList.current} />
          </div>
        )}
        <div className="hidden" id="hide-list">
          <div className="remove-confirm">
            Are you sure want to remove all the favourites?
          </div>
          <div className="yes-no">
            <div className="unclick-res" onClick={handleSelect} id="NO">
              NO
            </div>
            <div className="unclick-res" onClick={handleSelect} id="YES">
              YES
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${Image});
  height: 100vh;
  width: 100wh;
  background-size: cover;
  overflow: scroll;

  .container {
    margin-left: 120px;
    margin-right: 120px;
  }

  .no-favourites {
    text-align: center;
    margin-top: 176px;
  }

  .no-favourites-msg {
    margin-top: 25px;
    height: 21px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 21px;
  }

  .first-row {
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    height: 15px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 15px;
  }

  .remove-favourites {
    height: 210px;
    width: 458px;
    border-radius: 2px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
  }

  .remove-confirm {
    height: 18px;
    color: #000000;
    font-family: Roboto;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    margin-top: 58px;
  }

  .yes-no {
    display: flex;
    justify-content: center;
  }

  .click-res {
    box-sizing: border-box;
    border-radius: 2px;
    width: 106px;
    background-color: #f76b1c;
    color: #ffffff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    padding: 9px 40px;
    margin-top: 70px;
    text-align: center;
  }

  .unclick-res {
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

  .hidden {
    display: none;
  }
`;

export default Favourite;
