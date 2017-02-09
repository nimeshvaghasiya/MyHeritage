
import { Routes, RouterModule } from '@angular/router';
import { PaintComponent } from './paint.component';

const routes: Routes = [
    {
        path: '',
        component: PaintComponent
    }
];

export const routing = RouterModule.forChild(routes);