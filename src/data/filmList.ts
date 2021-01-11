export interface FilmInterface {
  id: string;
  posterImg: string;
  title: string;
  producer: Partner[];
  genre: string;
  playTime: string;
  description: string;
}

interface Partner {
  name: string;
  picture: string;
}
export const filmList: FilmInterface[] = [
  {
    id: 'jBdRhhSt3Bc',
    posterImg: '/assets/images/1.jpg',
    title: '기생충',
    producer: [
      { name: '봉준호', picture: '/assets/images/bong.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
      { name: '송강호', picture: '/assets/images/song.jpg' },
    ],
    playTime: '1:30:01',
    genre: '블랙코미디',
    description: `<기생충>이라는 영화는 블랙 코미디와 스릴러이자 강력한 메타포입니다.
    한 지붕 아래에서 벌어지는 계급 간의 갈등을 보여주지만, 몇몇은 그 갈등의 존재조차 의식하지 못합니다.
    영화를 보다 보면 어느 인물의 편을 들어줘야 할지 마음이 계속 바뀌는 것을 느끼실 겁니다.
    그리고 스스로에게 질문하게 되죠. 누가 영웅이고, 누가 악당일까요?
    영화관을 떠난 후에도 결론을 내리지 못하실 수도 있습니다."`,
  },
  {
    id: 'Ko2NWhXI9e8',
    posterImg: '/assets/images/2.jpg',
    title: '어벤져스 엔드게임',
    producer: [{ name: '루소형제', picture: '/assets/images/1.jpg' }],
    playTime: '1:30:01',
    genre: '액션',
    description: `엔딩 크레딧 이후에[21] 7분 가량의 여러 추가 장면들과 함께 스탠 리 마블 명예회장을 위한 추모 영상, 그리고 약간의 '서프라이즈'를 추가한 확장판을 미국 시간 6월 28일에 재개봉하였다. 국내 에서는 4월 29일에 재개봉 되었다.

    아무래도 아바타의 흥행 기록을 넘기기 위한 마블의 묘책으로 보인다. 2019년 6월 22일 자정을 기점으로 아바타와 엔드게임의 월드와이드 박스오피스 성적 차는 4천 4백만 달러 가량으로, 엔드게임의 개봉 4주차 북미 성적이 3천 9백만 달러였던 것을 감안할 때 스파이더맨: 파 프롬 홈 개봉일인 7월 2일 전에 아바타 흥행 기록을 뛰어 넘을 수 있을 것으로 보인다. 단, 월드와이드가 아닌 북미 성적만을 보았을 때 북미 박스오피스 역대 1위인 스타워즈: 깨어난 포스[22]와는 약 1억불 가까이 흥행 차이가 나기 때문에 북미 1위를 탈환하기는 어려워 보인다.
    
    한국 CGV에서도 굿바이 어벤져스 리액션 상영회라는 이름으로 사실상의 IMAX 재개봉을 실시하였으며, 전국 주요 아이맥스관을 토이 스토리 4와 양분하여 상영 중이다. 리액션 상영회라는 이름에도 적혀있듯이 외국 영화관처럼 박수, 함성, 대사 따라하기, 심지어 통곡하기까지 허용한다고[23] 하니 모르고 갔다가 시끄럽다고 진상부리는 일이 없도록 하자. 덧붙여 이번 아이맥스 재상영은 미국 재개봉판처럼 추가장면이 삽입된 버젼이 아니므로 추가장면을 보기 위해 예매하는 일이 없도록 하자.
    
    마무리 안 된 삭제씬이 공개된다.# 그 반대급부로 유튜브에서 그 삭제씬을 볼 수 없다.`,
  },
  {
    id: 'BaIRaKXrLPk',
    posterImg: '/assets/images/3.jpg',
    title: '극한직업',
    producer: [{ name: '이병헌', picture: '/assets/images/1.jpg' }],
    playTime: '1:30:01',
    genre: '코미디',
    description: '설명',
  },
  {
    id: 'Lwxm-72412A',
    posterImg: '/assets/images/4.jpg',
    title: '내 머리속의 지우개',
    producer: [{ name: '이병헌', picture: '/assets/images/1.jpg' }],
    playTime: '1:30:01',
    genre: '멜로',
    description: '설명',
  },
  {
    id: '9JtXwsyCqes',
    posterImg: '/assets/images/5.jpg',
    title: '스파이더맨 파프롬홈',
    producer: [{ name: '이병헌', picture: '/assets/images/1.jpg' }],
    playTime: '1:30:01',
    genre: '액션',
    description: '설명',
  },
  {
    id: 'x60mB0zXZ38',
    posterImg: '/assets/images/6.jpg',
    title: '조커',
    producer: [{ name: '이병헌', picture: '/assets/images/1.jpg' }],
    playTime: '1:30:01',
    genre: '드라마',
    description: '설명',
  },
];
