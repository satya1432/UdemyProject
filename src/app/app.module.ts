import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpdetailsComponent } from "./components/empdetails/empdetails.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { SubmitComponent } from "./components/submit/submit.component";
import { HeaderComponent } from "./components/header/header.component";
import { HooksComponent } from "./components/hooks/hooks.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ViewEncapsulationComponent } from "./components/view-encapsulation/view-encapsulation.component";
import { ChildComponent } from "./components/child/child.component";
@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    SubmitComponent,
    HeaderComponent,
    HooksComponent,
    DatabindingComponent,
    FormsComponent,
    ViewEncapsulationComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
