import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { BlockUIModule } from 'primeng/blockui';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';
import { ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { ContextMenuModule } from 'primeng/contextmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeedDialModule } from 'primeng/speeddial';







@NgModule({


  imports: [PanelMenuModule, ToastModule, TableModule,  MultiSelectModule, InputTextModule,
    ButtonModule, DropdownModule, AutoCompleteModule, ProgressSpinnerModule, DialogModule, BlockUIModule,
    ListboxModule, PanelModule, SidebarModule, TreeModule, ToolbarModule, SplitButtonModule, DividerModule,
    PaginatorModule, ContextMenuModule, OverlayPanelModule, CalendarModule, TabMenuModule, CheckboxModule, BrowserModule
    , BrowserAnimationsModule, SpeedDialModule  ],



  exports: [
    PanelMenuModule, ToastModule, TableModule, MultiSelectModule, InputTextModule,
    ButtonModule, DropdownModule, AutoCompleteModule, ProgressSpinnerModule, DialogModule, BlockUIModule,
    ListboxModule, PanelModule, SidebarModule, TreeModule, ToolbarModule, SplitButtonModule, DividerModule,
    PaginatorModule, ContextMenuModule, OverlayPanelModule, CalendarModule, TabMenuModule, CheckboxModule, BrowserModule
    , BrowserAnimationsModule, SpeedDialModule
  ]

})
export class PrimeNGModules { }
