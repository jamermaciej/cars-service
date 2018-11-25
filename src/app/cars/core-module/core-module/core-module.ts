import { RouterModule } from '@angular/router';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent]
})
export class CoreModule { }
