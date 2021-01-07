export interface FilmInterface {
  id: string;
  posterImg: string;
  title: string;
  producer: Partner[];
  actor: Partner[];
}

interface Partner {
  name: string;
  picture: string;
}
export const filmList: FilmInterface[] = [
  {
    id: '1',
    posterImg: '/assets/images/1.jpg',
    title: '기생충',
    producer: [{ name: '봉준호', picture: '/assets/images/1.jpg' }],
    actor: [{ name: '봉준호', picture: '/assets/images/1.jpg' }],
  },
  {
    id: '2',
    posterImg: '/assets/images/2.jpg',
    title: '어벤져스 엔드게임',
    producer: [{ name: '루소형제', picture: '/assets/images/1.jpg' }],
    actor: [{ name: '봉준호', picture: '/assets/images/1.jpg' }],
  },
  {
    id: '3',
    posterImg: '/assets/images/3.jpg',
    title: '극한직업',
    producer: [{ name: '이병헌', picture: '/assets/images/1.jpg' }],
    actor: [{ name: '봉준호', picture: '/assets/images/1.jpg' }],
  },
];
