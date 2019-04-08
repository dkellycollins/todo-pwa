import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TodoDetailsPageComponent } from './todo-details-page/todo-details-page.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { AddTodoItemDialogComponent } from './add-todo-item-dialog/add-todo-item-dialog.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsPageComponent,
    TodoDetailsComponent,
    TodoListPageComponent,
    TodoListComponent,
    AddTodoItemDialogComponent
  ],
  entryComponents: [
    AddTodoItemDialogComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
