import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Page2Page } from './page2.page';
import { Page3PageModule } from '../page3/page3.module';

const routes: Routes = [
  {
    path: 'page2',
    component: Page2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Page3PageModule
  ],
  declarations: [Page2Page]
})
export class Page2PageModule { }
