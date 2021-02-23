import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrueOrFalseComponent } from './true-or-false.component';

const routes: Routes = [{ path: '', component: TrueOrFalseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrueOrFalseRoutingModule {}
