import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RodrigoComponent } from '../rodrigo.component';
import { ButtonComponent } from '../button/button.component';
import { CardsComponent } from '../cards/cards.component';
import { FormulariosComponent } from '../formularios/formularios.component';
import { MessageComponent } from '../message/message.component';

const routes: Routes = [
  {
    path:'algo',
    component: RodrigoComponent
  },
  {
    path:'button',
    component: ButtonComponent
  },
  {
    path:'card',
    component: CardsComponent
  },
  {
    path:'formularios',
    component: FormulariosComponent
  },
  {
    path:'message',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RodrigoRoutingModule { }
