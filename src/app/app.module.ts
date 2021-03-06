import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {QuizComponent} from './quiz/quiz.component';
import {ModeratorComponent} from './moderator/moderator.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ChatComponent} from './chat/chat.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    QuizComponent,
    ModeratorComponent,
    WelcomeComponent,
    ChatComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
