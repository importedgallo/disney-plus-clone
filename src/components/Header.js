import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a>
            <img src='/images/home-icon.svg' />
            <span>home</span>
          </a>
          <a>
            <img src='/images/search-icon.svg' />
            <span>search</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg' />
            <span>watchlist</span>
          </a>
          <a>
            <img src='/images/original-icon.svg' />
            <span>originals</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg' />
            <span>movies</span>
          </a>
          <a>
            <img src='/images/series-icon.svg' />
            <span>series</span>
          </a>
        </NavMenu>
        <UserImage src="/images/defaultprofile-image.svg"/>
      </Nav>
  )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 30px;
`

const Logo = styled.img`
  width: 80px;

`

const NavMenu = styled.div`
  display: flex;
  padding: 30px;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a{
    display: flex; 
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    img {
      height: 20px;
      padding: 15px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      font-weight: bold;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;

`