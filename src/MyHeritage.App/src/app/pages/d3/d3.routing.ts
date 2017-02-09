
import { Routes, RouterModule } from '@angular/router';
import { MyHeritageComponent } from './myheritage.component';

const routes: Routes = [
    {
        path: '',
        component: MyHeritageComponent
    }
];

export const routing = RouterModule.forChild(routes);