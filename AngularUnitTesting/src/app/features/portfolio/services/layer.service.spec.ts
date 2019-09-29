import { TestBed } from "@angular/core/testing";

import { LayerService } from "./layer.service";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("LayerService", () => {
  let httpTestingController: HttpTestingController;
  let layerService: LayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LayerService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    layerService = TestBed.get(LayerService);
  });

  it("should be created", () => {
    const service: LayerService = TestBed.get(LayerService);
    expect(service).toBeTruthy();
  });

  describe("getLayers", () => {
    it("should getLayers call with correct URL", () => {
      layerService.getLayers().subscribe();
      const req = httpTestingController.expectOne(
        "http://localhost:3000/layers"
      );
      req.flush({});
    });

    it("should return correct data on getlayers", () => {
      const mockLayer = {
        id: 0,
        name: "testLayer",
        type: "testType",
        description: "testdescription"
      };
      layerService.addLayer(mockLayer).subscribe(data => {
        expect(data.name).toBe("testLayer");
      });
      const req = httpTestingController.expectOne(
        "http://localhost:3000/layers"
      );
      expect(req.request.method).toEqual("POST");
      req.flush(mockLayer);
    });

    it("should return correct data on getlayerbyid", () => {
      const mockLayer = [
        {
          id: 1,
          name: "testLayer1",
          type: "testType1",
          description: "testdescription1"
        },
        {
          id: 2,
          name: "testLayer2",
          type: "testType2",
          description: "testdescription2"
        }
      ];
      layerService.getLayerById(11).subscribe(data => {
        console.log("data", data);
        expect(data).toBeDefined();
        expect(data[1].name).toBe("testLayer2");
      });

      const req = httpTestingController.expectOne(
        "http://localhost:3000/layers/11"
      );
      expect(req.request.method).toEqual("GET");
      req.flush(mockLayer);
      httpTestingController.verify();
    });
  });
});
