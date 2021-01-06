import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css/swiper.css';

const Main: React.FC = () => {
  return (
    <div>
      <Title>NEOVISION21</Title>
      <Swiper>
        <PosterContainer>
          <Link to={'/detail'}>
            <Poster src={'/assets/images/1.jpg'} />
          </Link>
          <div>기생충</div>
        </PosterContainer>
        <PosterContainer>
          <Poster src={'/assets/images/2.jpg'} />
          <div>어벤저스</div>
        </PosterContainer>
        <PosterContainer>
          <Poster src={'/assets/images/3.jpg'} />
          <div>극한직업</div>
        </PosterContainer>
      </Swiper>
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
  height: 100%;
  object-fit: cover;
`;

const PosterContainer = styled.div`
  height: 80vh;
`;
export default Main;
