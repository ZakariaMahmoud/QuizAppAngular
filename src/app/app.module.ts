import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { TrueOrFalseComponent } from './components/quiz/true-or-false/true-or-false.component';
import { environment } from 'src/environments/environment';


import {ItemService} from './shared/item.service';

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
    AngularFireModule.initializeApp(environment.firebase,"QuizApp"),
    AngularFirestoreModule

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
