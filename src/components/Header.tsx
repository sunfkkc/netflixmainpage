import React, { useState } from "react";
import styled from "styled-components";
import logo from "../static/headLogo.png";
import profileimg from "../static/profileimg.png";
import billboard from "../static/billboard.webp";
import { menus } from "../model/menu";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import cn from "classnames";
import CategoryTitle from "./CategoryTitle";
import MoviesContainer from "./MoviesContainer";
import { headMovies, moviesDummy1 } from "../model/movies";
import MoviesList from "./MoviesList";
import Slider from "react-slick";

function Header() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  window.addEventListener("scroll", () => {
    //스크롤이 최상단이 아니라면 메뉴바의 배경색 fade in
    if (document.documentElement.scrollTop === 0) {
      setIsScrollTop(true);
    } else {
      setIsScrollTop(false);
    }
  });

  return (
    <HeaderNavBar>
      <Menu className={cn({ isScrollTop })}>
        <div className="logo">
          <img src={logo} />

          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>{menu.title}</li>
            ))}
          </ul>
        </div>
        <IconsBlock>
          <FaSearch className="icon" />
          <BsBellFill className="icon" />
          <img src={profileimg} className="icon profile-image" />
        </IconsBlock>
      </Menu>
      <div className="headerMovieContainer">
        <MoviesContainer movies={headMovies} />
      </div>
    </HeaderNavBar>
  );
}

export default Header;

const HeaderNavBar = styled.div`
  background-image: url(${billboard});
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100vw;
  height: 55vw;
  position: relative;
  .isScrollTop {
    background: none;
  }
  .headerMovieContainer {
    background: none;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .headMoviePoster {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const Menu = styled.div`
  justify-content: space-between;
  background: rgb(18, 18, 18);
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  transition-property: background;
  transition-duration: 0.5s;
  .logo {
    display: flex;
    align-items: center;
    img {
      margin-left: 48px;
      width: 100px;
      height: 30px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-left: 50px;
    li:first-child {
      display: none;
    }
    li {
      font-size: 1rem;
      color: white;
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 955px) {
    ul {
      li:first-child {
        display: block;
      }
      li {
        display: none;
      }
    }
  }
`;

const IconsBlock = styled.div`
  align-items: center;
  display: flex;
  .icon {
    color: white;
    font-size: 1.5rem;
    margin-right: 25px;
  }
  .profile-image {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    margin-right: 70px;
  }
`;
