import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OptionsGenericSuggestionsComponent } from '../../../../components/options-generic-suggestions/options-generic-suggestions.component';

@Component({
  selector: 'app-form-new-celebration',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, OptionsGenericSuggestionsComponent],
  templateUrl: './form-new-celebration.component.html',
  styleUrl: './form-new-celebration.component.scss',
})
export class FormNewCelebrationComponent {
  myForm: FormGroup;
  submitted = false;
  selectedImage: string | ArrayBuffer | null = null;

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
  }

  handleSetSuggestionCelebrationTitle(value: string) {
    this.myForm.patchValue({ celebrationTitle: value });
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
    if (this.myForm.valid) {
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
