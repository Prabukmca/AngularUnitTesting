import { Component, OnInit, Input } from "@angular/core";
import { Layer } from "../../models/layer.model";
import { getLocaleDayPeriods } from "@angular/common";
import { LayerService } from "../../services/layer.service";

@Component({
  selector: "app-layers",
  templateUrl: "./layers.component.html",
  styleUrls: ["./layers.component.less"]
})
export class LayersComponent implements OnInit {
  title = "Default title";
  layers: Layer[] = [];

  @Input() value: boolean;

  constructor(private layerService: LayerService) {}

  ngOnInit() {
    
    this.getLayers();
  }
  getLayers() {
    this.layerService.getLayers().subscribe(data => {
      this.layers = data;
    });
  }
  add() {
    const layer = {
      id: 0,
      name: "layer4",
      type: "layer4 type",
      description: "layer4 description"
    };

    this.layerService.addLayer(layer).subscribe(data => {
      this.layers.push(data);
    });
  }
  delete(layer: Layer) {
    this.layerService.deleteLayer(layer).subscribe(data => {
      this.layers.splice(this.layers.indexOf(layer), 1);
    });
  }
}
