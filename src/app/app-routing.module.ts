import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import {ResultComponent } from './components/quiz/result/result.component';
import { TrueOrFalseComponent } from './components/quiz/true-or-false/true-or-false.component';


const routes: Routes = [

  { path: 'quiz', component: QuizComponent },
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultComponent },
  {path:'true-or-false',component:TrueOrFalseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
