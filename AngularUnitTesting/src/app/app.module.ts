import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioModule } from "./features/portfolio/portfolio.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PortfolioModule, NgbModule],
  providers: [],
  exports: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
