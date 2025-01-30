import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OptionsGenericSuggestionsComponent } from '../../../../components/options-generic-suggestions/options-generic-suggestions.component';
import { OptionsGenericSuggestionsAdvancedComponent } from '../../../../components/options-generic-suggestions-advanced/options-generic-suggestions-advanced.component';
import { Option } from '../../../../types';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-form-new-celebration',
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    CommonModule, 
    OptionsGenericSuggestionsComponent,
    OptionsGenericSuggestionsAdvancedComponent,
    MatIconModule
  ],
  templateUrl: './form-new-celebration.component.html',
  styleUrl: './form-new-celebration.component.scss',
})
export class FormNewCelebrationComponent {
  myForm: FormGroup;
  submitted = false;
  isTrySubmitForm = false;
  selectedImage: string | ArrayBuffer | null = null;
  celebrationEndPhrases: string[] = [
    "Que esta celebração fique para sempre em sua memória!",
    "Comemore hoje e guarde essa alegria para sempre!",
    "Que essa data seja apenas o começo de momentos inesquecíveis!",
    "Celebre cada instante, pois a vida é feita de momentos especiais!",
    "Que a felicidade desta celebração se multiplique todos os dias!",
    "Que este dia traga sorrisos, amor e muitas lembranças especiais!",
    "Um brinde a esta celebração e a muitas outras que virão!",
    "Que cada momento de hoje seja um tesouro no seu coração!",
    "A felicidade compartilhada hoje será lembrada para sempre!",
    "Que esta celebração seja o começo de um novo ciclo incrível!"
  ];
  musicVideos: Option[] = [
    { text: "Bohemian Rhapsody - Queen", value: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
    { text: "Shape of You - Ed Sheeran", value: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
    { text: "Billie Jean - Michael Jackson", value: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y" },
    { text: "Someone Like You - Adele", value: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { text: "Blinding Lights - The Weeknd", value: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { text: "Smells Like Teen Spirit - Nirvana", value: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
    { text: "Rolling in the Deep - Adele", value: "https://www.youtube.com/watch?v=rYEDA3JcQqw" },
    { text: "Uptown Funk - Mark Ronson ft. Bruno Mars", value: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { text: "Sweet Child O' Mine - Guns N' Roses", value: "https://www.youtube.com/watch?v=1w7OgIMMRc4" },
    { text: "Happier Than Ever - Billie Eilish", value: "https://www.youtube.com/watch?v=5GJWxDKyk3A" }
  ];
  deepSpecialMessages: string[] = [
    "Que a luz dentro de você nunca se apague, mesmo nos dias mais sombrios.",
    "A jornada da vida é feita de altos e baixos, mas cada passo tem um propósito maior.",
    "Você é mais forte do que imagina e mais amado do que pode perceber.",
    "Os desafios que você enfrenta hoje são os pilares da sua sabedoria de amanhã.",
    "O tempo é um presente precioso. Use-o para construir memórias e espalhar amor.",
    "Cada encontro, cada despedida, cada instante é um pedaço do seu legado no mundo.",
    "A vida não é medida pelo número de respirações, mas pelos momentos que tiram nosso fôlego.",
    "Que sua alma encontre paz e seu coração permaneça aberto para as infinitas possibilidades da vida.",
    "O amor verdadeiro transcende distâncias, tempos e palavras, ecoando para sempre em nossa essência.",
    "Você é uma faísca única no universo, e sua existência faz toda a diferença."
  ];
  
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      celebrationTitle: ['', [Validators.required, Validators.minLength(5)]],
      personName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      youtubeUrl: ['', [Validators.required, Validators.pattern("^(https?://)?(www\\.)?(youtube\\.com|youtu\\.be)/.+$")]],
      endPhrase: ['', [Validators.required, Validators.minLength(5)]],
      imageLink: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.handleSetSuggestionCelebrationTitle = this.handleSetSuggestionCelebrationTitle.bind(this);
    this.handleSetSuggestionYoutubeUrl = this.handleSetSuggestionYoutubeUrl.bind(this);
    this.handleSetSuggestionEndPhrase = this.handleSetSuggestionEndPhrase.bind(this);
    this.handleSetSuggestionDescription = this.handleSetSuggestionDescription.bind(this);
  }

  handleSetSuggestionCelebrationTitle(value: string) {
    this.myForm.patchValue({ celebrationTitle: value });
  }

  handleSetSuggestionYoutubeUrl(option: Option) {
    this.myForm.patchValue({ youtubeUrl: option.value })
  }

  handleSetSuggestionEndPhrase(value: string) {
    this.myForm.patchValue({ endPhrase: value });
  }

  handleSetSuggestionDescription(value: string) {
    this.myForm.patchValue({ description: value });
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.myForm.patchValue({ imageLink: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.isTrySubmitForm = true;
    if (this.myForm.valid) {
      this.isTrySubmitForm = false;
      this.submitted = true;
      console.log(this.myForm.value);
    }
  }

  getErrorMessageCelebrationTitleField(): string {
    const control = this.myForm.get('celebrationTitle');
  
    if (control?.hasError('required')) {
      return 'O título da celebração é obrigatório!';
    }
  
    if (control?.hasError('minlength')) {
      return `O título da celebração deve ter ao menos 5 letras!`;
    }
  
    return '';
  }  

  getErrorMessagePersonNameField(): string {
    const control = this.myForm.get('personName');
  
    if (control?.hasError('required')) {
      return 'O nome da pessoa é obrigatório!';
    }
  
    if (control?.hasError('minlength')) {
      return `O nome da pessoa deve ter ao menos 3 letras!`;
    }
  
    return '';
  }  

  getErrorMessageDescriptionField(): string {
    const control = this.myForm.get('description');
  
    if (control?.hasError('required')) {
      return 'A descrição é obrigatória!';
    }
  
    if (control?.hasError('minlength')) {
      return `A descrição deve ter ao menos 10 letras!`;
    }
  
    return '';
  }

  getErrorMessageYoutubeUrlField(): string {
    const control = this.myForm.get('youtubeUrl');
  
    if (control?.hasError('required')) {
      return 'O link de um vídeo do YouTUbe é obrigatório!';
    }
  
    if (control?.hasError('pattern')) {
      return `O link deve ser uma url válida!`;
    }
  
    return '';
  }

  getErrorMessageEndPhraseField(): string {
    const control = this.myForm.get('endPhrase');
  
    if (control?.hasError('required')) {
      return 'A frase final de destaque é obrigatória!';
    }
  
    if (control?.hasError('minlength')) {
      return `A frase deve ter ao menos 5 letras!`;
    }
  
    return '';
  }

  getErrorMessageImageLinkField(): string {
    const control = this.myForm.get('imageLink');
  
    if (control?.hasError('required')) {
      return 'A imagem do participante é obrigatória!';
    }
  
    return '';
  }

  getErrorMessageEmailField(): string {
    const control = this.myForm.get('email');
  
    if (control?.hasError('required')) {
      return 'O seu melhor email é obrigatório!';
    }

    if (control?.hasError('email')) {
      return 'Insira um email válido!';
    }
  
    return '';
  }
}
