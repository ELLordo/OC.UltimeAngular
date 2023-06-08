import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component'
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { NamePipe } from './pipes/userName.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    NamePipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    NamePipe,
    TimeAgoPipe
  ]
})
export class SharedModule { }
