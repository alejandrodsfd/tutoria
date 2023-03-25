import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
