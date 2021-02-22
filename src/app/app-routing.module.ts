import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { TrueOrFalseComponent } from './components/quiz/true-or-false/true-or-false.component';
import { ShareComponent } from './components/quiz/true-or-false/share/share.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz/:quiz_name', component: QuizComponent },
  { path: 'quiz', redirectTo: '' },
  { path: 'true-or-false', component: TrueOrFalseComponent },
  { path: 'true-or-false/share/:user_id', component: ShareComponent },
  { path: 'true-or-false/share/', redirectTo: '' },
  { path: 'user-not-found', component: UserNotFoundComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
