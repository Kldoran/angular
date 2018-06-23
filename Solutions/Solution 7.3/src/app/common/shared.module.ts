import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from '../common/no-image.pipe';
import { RestHelperService } from './rest-helper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoImagePipe],
  providers: [RestHelperService],
  exports: [NoImagePipe]
})
export class SharedModule { }
