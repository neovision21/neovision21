import { filmList } from 'data/filmList';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css/swiper.css';

const Main: React.FC = () => {
  return (
    <Background>
      <Title>NEOVISION21</Title>
      <GridContainer>
        {filmList.map((item) => (
          <PosterContainer
            key={item.id}
            to={{
              pathname: '/detail',
              state: { filmData: item },
            }}>
            <Poster src={item.posterImg} />
            <FilmTitle>{item.title}</FilmTitle>
          </PosterContainer>
        ))}
      </GridContainer>
    </Background>
  );
};

const Background = styled.div`
  background-image: url('/assets/images/seamless-2033674_1280.jpg');
  background-size: 50vw;
`;

const Title = styled.div`
  font-size: 40px;
  height: 10vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
`;

const Poster = styled.img`
  flex: 1;
  height: 80%;
  object-fit: cover;
`;

const FilmTitle = styled.div`
  padding: 20px;
  z-index: 100;
  font-size: 30px;
  text-decoration;
`;

const PosterContainer = styled(Link)`
  height: 50vh;
  padding: 20px;
  color: inherit;
  text-decoration: none;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;
export default Main;
