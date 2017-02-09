import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeritageComponent } from './myheritage.component';
import { MyHeritageService } from '../../shared/services/myharitage.service'
import { routing } from './d3.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        MyHeritageComponent
    ],
    providers: [
        MyHeritageService
    ]
})
export default class D3Module { }