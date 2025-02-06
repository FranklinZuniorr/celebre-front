import { Routes } from '@angular/router';
import { MainComponent } from './screens/main/main.component';
import { SuccessPayComponent } from './screens/success-pay/success-pay.component';
import { CelebrationComponent } from './screens/celebration/celebration.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'sucesso', component: SuccessPayComponent },
    { path: 'celebracao/:id', component: CelebrationComponent }
];
