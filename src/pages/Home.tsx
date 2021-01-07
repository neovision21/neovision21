import { FilmInterface } from 'data/filmList';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Home: React.FC<RouteComponentProps> = (props) => {
  const opts = {
    height: '390',
    width: '640',
  };

  console.log(props.location.state);
  const state: any = props.location.state;
  const filmData: FilmInterface = state.filmData;
  console.log('filmData', filmData);
  return (
    <Container>
      <LeftContent>
        <Header>
          <Title>{filmData.title}</Title>
          <div>{`${filmData.genre} | ${filmData.playTime}`}</div>
        </Header>
        <Content>
          <div>Made by</div>
          <ProducerList>
            {filmData.producer.map((item) => (
              <ProducerItem>
                {item.name}
                <ProducerImg src={item.picture} />
              </ProducerItem>
            ))}
          </ProducerList>
          <div>{filmData.description}</div>
        </Content>
        <YouTube videoId={filmData.id} onReady={(event) => event.target.pauseVideo()} opts={opts}></YouTube>
      </LeftContent>
      <RightContent>
        <PosterImg src={filmData.posterImg} />
      </RightContent>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightContent = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProducerItem = styled.div`
  display: flex;
`;

const ProducerImg = styled.img`
  width: 100px;
  object-fit: contain;
`;
const ProducerList = styled.div`
  display: flex;
`;

const PosterImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default Home;
