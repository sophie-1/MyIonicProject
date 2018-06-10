import { NgModule } from '@angular/core';
import { LoginModelComponent } from './login-model/login-model';
import { SophieModelComponent } from './sophie-model/sophie-model';
@NgModule({
	declarations: [LoginModelComponent,
    SophieModelComponent],
	imports: [],
	exports: [LoginModelComponent,
    SophieModelComponent]
})
export class ComponentsModule {}
