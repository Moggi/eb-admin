import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {
    NbThemeModule, NbMenuModule, NbActionsModule, NbSidebarModule,
    NbLayoutModule, NbMenuService, NbSidebarService, NbCardModule, NbIconModule
} from '@nebular/theme';
// import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { CommonModule } from '@angular/common';
import { SimpleCheckboxRenderComponent } from './smart-table/simple-checkbox-render/simple-checkbox-render.component';
import { SimpleColorRenderComponent } from './smart-table/simple-color-render/simple-color-render.component';
import { SimpleColorEditorComponent } from './smart-table/simple-color-editor/simple-color-editor.component';


const COMPONENTS = [
    HeaderComponent,
    SimpleCheckboxRenderComponent,
    SimpleColorRenderComponent,
    SimpleColorEditorComponent,
];

@NgModule({
    imports: [
        NbThemeModule,
        NbMenuModule,
        NbIconModule,
        NbActionsModule,
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        CommonModule,
    ],
    exports: [
        ...COMPONENTS,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    providers: [
        NbSidebarService,
        // NbMenuInternalService,
        NbMenuService,
    ],
})
export class ComponentsModule {
}
