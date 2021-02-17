import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { TrueOrFalseComponent } from './components/quiz/true-or-false/true-or-false.component';
import { environment } from 'src/environments/environment';

import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    HomeComponent,
    TrueOrFalseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'QuizApp'),
    AngularFireDatabaseModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
