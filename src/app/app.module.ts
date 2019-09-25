import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    GridModule,
    DropDownListModule,
    CheckBoxModule,
    MultiSelectModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class AppModule { }
