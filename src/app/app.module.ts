import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { TaskComponent } from './task/task.component';
import { NoteListComponent } from './note/note-list/note-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    TaskComponent,
    NoteListComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
