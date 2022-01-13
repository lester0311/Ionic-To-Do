import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTaskPagePage } from './update-task-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTaskPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTaskPagePageRoutingModule {}
