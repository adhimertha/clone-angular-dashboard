import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IglooUiComponent } from 'src/component/igloo-ui/igloo-ui.component';
import { IglooSelectLangComponent } from 'src/component/igloo-select-lang/igloo-select-lang.component';
import { IglooButtonComponent } from 'src/component/igloo-button/igloo-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent
  ],
  exports: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent
  ]
})
export class ShareModule { }
