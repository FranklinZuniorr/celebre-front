import { ModelCardCelebrationProps } from "./components/model-card-celebration/model-card-celebration.component";

export enum ENUM_MAIN_AREAS {
    GENERAL = 'GENERAL',
    MODELS = 'MODELS'
}

export const defaultAvatar = 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg';

export const optionsModel: ModelCardCelebrationProps[] = [
    { 
      title: 'Carnaval', 
      backgroundImage: 'https://t3.ftcdn.net/jpg/03/10/03/20/360_F_310032026_jq6nyLbIoG9HeZPp2EePPIsNLzOPZsd8.jpg', 
      celebrationData: {
        celebrationTitle: 'Feliz Carnaval',
        description: 'Que essa festa traga alegria, cores e muita energia positiva para você! Dance, sorria e aproveite cada momento com leveza e boas vibrações. Seja na folia ou no descanso, que seu Carnaval seja incrível! 🎶🎉💃🕺',
        email: 'seuemail@gmail.com',
        endPhrase: 'Feliz Carnaval! Que a alegria e a folia encham seu dia de cores e sorrisos! 🎭🎉',
        imageLink: defaultAvatar,
        personName: 'Nome do homenageado',
        youtubeUrl: 'https://www.youtube.com/watch?v=VUDejORn-uY'
      }
    },
    { 
        title: 'Aniversário', 
        backgroundImage: 'https://images4.alphacoders.com/134/1345708.png', 
        celebrationData: {
          celebrationTitle: 'Feliz Aniversário!',
          description: 'Hoje é o seu dia! Que você tenha um ano maravilhoso, cheio de realizações, amor e momentos inesquecíveis! 🎂🎉🎁',
          email: 'aniversarioinfo@gmail.com',
          endPhrase: 'Feliz Aniversário! Que sua vida seja sempre iluminada com muita saúde, amor e felicidade! 🎈🎉',
          imageLink: defaultAvatar,
          personName: 'Nome do aniversariante',
          youtubeUrl: 'https://www.youtube.com/watch?v=-ZvsGmYKhcU'
        }
      },
    { 
      title: 'Ano Novo', 
      backgroundImage: 'https://st3.depositphotos.com/2627021/32199/i/450/depositphotos_321993178-stock-photo-new-year-celebration-champagne-fireworks.jpg', 
      celebrationData: {
        celebrationTitle: 'Feliz Ano Novo!',
        description: 'Que o novo ano traga renovação, novas oportunidades e muita felicidade! Que todos os seus desejos se realizem neste novo ciclo. 🌟🎆',
        email: 'novoanoinfo@gmail.com',
        endPhrase: 'Feliz Ano Novo! Que a virada de ano seja cheia de paz, alegria e esperança! 🎉',
        imageLink: defaultAvatar,
        personName: 'Nome do homenageado',
        youtubeUrl: 'https://www.youtube.com/watch?v=HWjCStB6k4o'
      }
    },
    { 
      title: 'Natal', 
      backgroundImage: 'https://png.pngtree.com/thumb_back/fw800/background/20240801/pngtree-d-design-a-festive-new-years-fireworks-confetti-background-that-evokes-image_16124485.jpg', 
      celebrationData: {
        celebrationTitle: 'Feliz Natal!',
        description: 'Que o Natal seja repleto de paz, amor e boas energias. Aproveite esse momento com quem você ama e que a magia do Natal preencha seu coração! 🎄✨',
        email: 'natalinfo@gmail.com',
        endPhrase: 'Feliz Natal! Que a luz do Natal ilumine seu caminho e traga muita felicidade para sua vida! 🌟🎁',
        imageLink: defaultAvatar,
        personName: 'Nome do homenageado',
        youtubeUrl: 'https://youtu.be/aAkMkVFwAoo'
      }
    },
  ];
  