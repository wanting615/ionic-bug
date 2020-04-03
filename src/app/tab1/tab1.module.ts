import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Page1PageModule } from "../pages/page1/page1.module";
import { Page2PageModule } from "../pages/page2/page2.module";
import { Page3PageModule } from "../pages/page3/page3.module";
import { Page4PageModule } from "../pages/page4/page4.module";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes),
    Page1PageModule,
    Page2PageModule,
    Page3PageModule,
    Page4PageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
