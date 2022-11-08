import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditTagComponent } from './product-edit/product-edit-tag/product-edit-tag.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';



@NgModule({
  declarations: [
    ProductEditComponent,
    ProductEditTagComponent,
    ProductEditInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
