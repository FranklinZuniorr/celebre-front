import { ModelCardCelebrationProps } from "./components/model-card-celebration/model-card-celebration.component";

export enum ENUM_MAIN_AREAS {
    GENERAL = 'GENERAL',
    MODELS = 'MODELS'
}

export const optionsModel: ModelCardCelebrationProps[] = [
    { 
      title: 'Carnaval', 
      backgroundImage: 'https://t3.ftcdn.net/jpg/03/10/03/20/360_F_310032026_jq6nyLbIoG9HeZPp2EePPIsNLzOPZsd8.jpg', 
      celebrationData: {
        celebrationTitle: 'teste',
        description: 'teste teste',
        email: 'teste@gmail.com',
        endPhrase: 'teste teste teste',
        imageLink: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-em-estilo-plano-ilustracao-vetorial-de-perfil-de-usuario-masculino-em-fundo-isolado-conceito-de-negocio-de-sinal-de-perfil-masculino_157943-38764.jpg?semt=ais_hybrid',
        personName: 'teste teste',
        youtubeUrl: 'https://www.youtube.com/watch?v=-RbeVRFaV3I'
      }
    }
  ]