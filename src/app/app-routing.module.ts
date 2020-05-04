import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubmitComponent } from "./components/submit/submit.component";
import { HooksComponent } from "./components/hooks/hooks.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ViewEncapsulationComponent } from "./components/view-encapsulation/view-encapsulation.component";

const routes: Routes = [
  { path: "data-share", component: SubmitComponent },
  { path: "lifcycle-hooks", component: HooksComponent },
  { path: "data-binding", component: DatabindingComponent },
  { path: "forms", component: FormsComponent },
  { path: "view-encaps", component: ViewEncapsulationComponent },
  {
    path: "client",
    loadChildren: "./components/client/client/client.module#ClientModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
