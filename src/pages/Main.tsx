import { filmList } from 'data/filmList';
import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import styled from 'styled-components';
import 'swiper/css/swiper.css';

const Main: React.FC = () => {
  return (
    <div>
      <Title>NEOVISION21</Title>
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        style={{ width: `100%`, height: `80vh` }}
        // config={{ stiffness: 160, damping: 110 }}
        className={'string'}
        animValues={5}>
        {filmList.map((item) => (
          <PosterContainer key={item.id}>
            <Link to={'/detail'}>
              <Poster src={item.posterImg} />
              <FilmTitle>{item.title}</FilmTitle>
            </Link>
          </PosterContainer>
        ))}
      </HorizontalScroll>
    </div>
  );
};

const Title = styled.div`
  font-size: 59px;
  justify-content: center;
  width: 100vw;
`;

const Poster = styled.img`
  flex: 1;
  height: 80%;
  object-fit: cover;
`;

const FilmTitle = styled.div`
  z-index: 100;
  height: 100px;
  font-size: 10px;
  color: black;
`;

const PosterContainer = styled.div`
  //   height: 80vh;
  width: 30%;
`;

const HorizontalDiv = styled.div``;
export default Main;
