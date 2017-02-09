import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './paint.component';
import { routing } from './paint.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        PaintComponent
    ],
    providers: []
})
export default class PaintModule { }