import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioModule } from './features/portfolio/portfolio.module';


const routes: Routes = [
  { path: "", redirectTo: "/portfolio", pathMatch: "full" },
  {
    path: "portfolio",
    loadChildren: () =>
      import("./features/portfolio/portfolio.module").then(
        d => d.PortfolioModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
