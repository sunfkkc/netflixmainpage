import React, { useState } from "react";
import styled from "styled-components";
import { movieData } from "../model/interface";
import { BsPlayCircle, BsHandThumbsUp } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
function MovieItem({ fullTitle, image }: movieData) {
  const [isHover, setIsHover] = useState(
    fullTitle === "The Dark Knight (2008)"
  );

  return (
    <MovieItemBlock>
      <img
        className="board-image"
        src={image}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      />

      {isHover && (
        <HoverModal
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
        >
          <img src={image} className="modal-image" />
          <ModalControler>
            <BsPlayCircle color="white" size="2rem" className="icon" />
            <AiOutlinePlusCircle color="white" size="2rem" className="icon" />
            <BsHandThumbsUp color="white" size="2rem" className="icon" />
            <IoIosArrowDropdown color="white" size="2rem" className="icon" />
          </ModalControler>
          <ModalMovieTitle>{fullTitle}</ModalMovieTitle>
        </HoverModal>
      )}
    </MovieItemBlock>
  );
}

export default MovieItem;

const MovieItemBlock = styled.div`
  .board-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .board-image:hover {
    cursor: pointer;
  }
`;

const HoverModal = styled.div`
  position: absolute;
  top: 0;
  display: block;
  .modal-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  width: 300px;
  height: 800px;
  background: black;
  animation: growUp 0.4s ease-in-out;
  transform: translateX(-55px);

  @keyframes growUp {
    from {
      transform: translateX(-55px) scale(0);
    }

    to {
      transform: translateX(-55px) scale(1);
    }
  }
`;

const ModalControler = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  .icon {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const ModalMovieTitle = styled.h2`
  color: white;
  background: white;
`;
