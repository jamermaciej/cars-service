import { SortPipe } from './../pipes/sort.pipe';
import { CarFilterPipe } from './../pipes/car-filter.pipe';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurnameShortcutPipe } from '../pipes/surname-shortcut.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    CarFilterPipe,
    SortPipe
  ],
  declarations: [HeaderComponent, SurnameShortcutPipe, CarFilterPipe, SortPipe]
})
export class SharedModule { }
