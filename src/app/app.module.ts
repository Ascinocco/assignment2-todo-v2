import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { TodoComponent } from '../pages/todo/todoComponent';

export const firebaseConfig = {
    apiKey: "AIzaSyAQJFJpCbQ_7lMYSdIpDtoS5MUNEGG-TPg",
    authDomain: "ionic-todo-ad3f2.firebaseapp.com",
    databaseURL: "https://ionic-todo-ad3f2.firebaseio.com",
    storageBucket: "ionic-todo-ad3f2.appspot.com",
    messagingSenderId: "793309666065"
};

@NgModule({
  declarations: [
    MyApp,
    TodoComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
