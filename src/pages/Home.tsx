import { FilmInterface, filmList } from 'data/filmList';
import React from 'react';
import Swiper from 'react-id-swiper';
import { RouteComponentProps } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Home: React.FC<RouteComponentProps> = (props) => {
  const opts = {
    width: '100%',
  };

  const state: any = props.location.state;
  const filmData: FilmInterface = state.filmData;
  return (
    <Root>
      <SwiperContainer>
        <Swiper activeSlideKey={filmData.id}>
          {filmList.map((item) => (
            <Container key={item.id}>
              <LeftContent>
                <Header>
                  <Title>{item.title}</Title>
                  <div>{`${item.genre} | ${item.playTime}`}</div>
                </Header>
                <PosterImgMob src={item.posterImg} />
                <ProducerContainer>
                  <div>Made by</div>
                  <ProducerList>
                    {item.producer.map((item, index) => (
                      <ProducerItem key={`prd_${index}`}>
                        {item.name}
                        <ProducerImg src={item.picture} />
                      </ProducerItem>
                    ))}
                  </ProducerList>
                </ProducerContainer>

                <Content>
                  <Description>{item.description}</Description>
                  <YouTube videoId={item.id} onReady={(event) => event.target.pauseVideo()} opts={opts}></YouTube>
                </Content>
              </LeftContent>
              <RightContent>
                <PosterImg src={item.posterImg} />
              </RightContent>
            </Container>
          ))}
        </Swiper>
      </SwiperContainer>
    </Root>
  );
};
const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const SwiperContainer = styled.div`
  width: 70vw;
  @media only screen and (max-width: 640px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: 640px) {
    position: fixed;
    background: rgba(35, 33, 6, 0.3);
    width: 100%;
    box-sizing: border-box;
  }
`;

const Title = styled.div`
  font-size: 40px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  padding: 20px;
  @media only screen and (max-width: 640px) {
    padding: 0px;
  }
`;
const RightContent = styled.div`
  display: flex;
  flex: 3;
  padding-top: 100px;
  align-items: flex-start;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  width: 80vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 640px) {
    padding: 0px 20px;
  }
`;

const ProducerContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const ProducerItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const ProducerImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
  object-fit: contain;
  margin-bottom: 10px;
`;

const ProducerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-column-gap: 12px;
`;

const Description = styled.div`
  padding: 100px 0px;
  text-align: left;
`;

const PosterImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const PosterImgMob = styled(PosterImg)`
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

export default Home;
