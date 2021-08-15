import React from 'react';
import styled from 'styled-components';

const Table = ({list}) => {
    return (
        <Wrapper>
            {list.map((fav, index) => {
                return (<span className="fav-details-list">
                    <span className="fav-location">{fav.name}</span>
                    <img src={fav.icon} className="fav-icon" />
                    <span className="temperature">
                        <span className="fav-temp">{fav.main.temp}</span>
                        <span className="unit">⁰C</span>
                    </span>
                    <span className="fav-text">{fav.weather.description}</span>
                    <img src={fav.favicon} className="fav-favicon" />
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

`;

export default Table;