import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'quiz/:quiz_name',
    loadChildren: () =>
      import('./components/quiz/quiz.module').then((m) => m.QuizModule),
  },

  {
    path: 'true-or-false',
    loadChildren: () =>
      import('./components/quiz/true-or-false/true-or-false.module').then(
        (m) => m.TrueOrFalseModule
      ),
  },

  {
    path: 'true-or-false/share/:user_id',
    loadChildren: () =>
      import('./components/quiz/true-or-false/share/share.module').then(
        (m) => m.ShareModule
      ),
  },

  {
    path: 'user-not-found',
    loadChildren: () =>
      import('./components/user-not-found/user-not-found.module').then(
        (m) => m.UserNotFoundModule
      ),
  },

  { path: 'true-or-false/share/', redirectTo: '' },
  { path: 'quiz', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
