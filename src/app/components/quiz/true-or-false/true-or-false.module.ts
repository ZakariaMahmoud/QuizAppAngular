import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TrueOrFalseRoutingModule } from './true-or-false-routing.module';
import { TrueOrFalseComponent } from './true-or-false.component';

@NgModule({
  declarations: [TrueOrFalseComponent],
  imports: [CommonModule, TrueOrFalseRoutingModule, NgxSpinnerModule],
})
export class TrueOrFalseModule {}
