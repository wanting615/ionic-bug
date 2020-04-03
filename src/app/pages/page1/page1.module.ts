import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Page2PageModule } from '../page2/page2.module';


import { Page1Page } from './page1.page';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Page2PageModule
  ],
  declarations: [Page1Page]
})
export class Page1PageModule { }
