import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from '../common/no-image.pipe';
import { RestHelperService } from './rest-helper.service';
import { DragAndDropDirective } from './drag-and-drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoImagePipe, DragAndDropDirective],
  providers: [RestHelperService],
  exports: [NoImagePipe, DragAndDropDirective]
})
export class SharedModule { }
