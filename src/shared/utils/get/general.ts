import { HeroAtom } from '@/shared/state/type';
import api from '../api';

export const getHero = async (): Promise<HeroAtom> => {

  try {

    const response = await api.get('/todos');

    let data: HeroAtom = {data: null, error: false, loading: false};

    data.data = [
      { 
        id: 1,
        title: 'Amazing & Delicious Food',
        subtitle: 'Welcome To Our Restaurant',
        img: 'https://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/banner-12.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        slug: 'res'
      },
      { 
        id: 2,
        title: 'Where does it come from?',
        subtitle: 'Welcome To Our Restaurant',
        img: 'https://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/banner-2.jpg',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        slug: 'res'
      },
      { 
        id: 3,
        title: 'Where can I get some?',
        subtitle: 'Welcome To Our Restaurant',
        img: 'https://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/banner-1.jpg',
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        slug: 'res'
      }
    ]

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};


