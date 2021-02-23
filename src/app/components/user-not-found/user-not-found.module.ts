import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNotFoundRoutingModule } from './user-not-found-routing.module';
import { UserNotFoundComponent } from './user-not-found.component';

@NgModule({
  declarations: [UserNotFoundComponent],
  imports: [CommonModule, UserNotFoundRoutingModule],
})
export class UserNotFoundModule {}
