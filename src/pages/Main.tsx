import { filmList } from 'data/filmList';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css/swiper.css';

const Main: React.FC = () => {
  return (
    <div>
      <Title>NEOVISION21</Title>
      <GridContainer>
        {filmList.map((item) => (
          <PosterContainer key={item.id}>
            <Link
              to={{
                pathname: '/detail',
                state: { filmData: item },
              }}>
              <Poster src={item.posterImg} />
              <FilmTitle>{item.title}</FilmTitle>
            </Link>
          </PosterContainer>
        ))}
      </GridContainer>
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
  font-size: 20px;
  color: black;
`;

const PosterContainer = styled.div`
  height: 50vh;
  padding: 20px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Main;
