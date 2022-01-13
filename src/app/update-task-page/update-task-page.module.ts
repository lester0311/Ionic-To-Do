import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTaskPagePageRoutingModule } from './update-task-page-routing.module';

import { UpdateTaskPagePage } from './update-task-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTaskPagePageRoutingModule
  ],
  declarations: [UpdateTaskPagePage]
})
export class UpdateTaskPagePageModule {}
