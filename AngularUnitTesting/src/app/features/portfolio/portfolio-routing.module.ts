import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataManagerComponent } from "./components/data-manager/data-manager.component";
import { LayersComponent } from "./components/layers/layers.component";

const routes: Routes = [
  { path: "", component: DataManagerComponent },
  { path: "layers", component: LayersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
  static components = [DataManagerComponent];
}
