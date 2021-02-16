import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { TrueOrFalseComponent } from './components/quiz/true-or-false/true-or-false.component';


const routes: Routes = [

  { path: 'quiz/:quiz_name', component: QuizComponent },
  { path: 'quiz', redirectTo: '' },
  { path: '', component: HomeComponent },
  { path:'true-or-false',component:TrueOrFalseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
