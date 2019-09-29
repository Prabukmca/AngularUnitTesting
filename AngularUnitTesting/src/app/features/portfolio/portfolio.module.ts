import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { LayersComponent } from './components/layers/layers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PortfolioRoutingModule.components, LayersComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PortfolioModule {}
