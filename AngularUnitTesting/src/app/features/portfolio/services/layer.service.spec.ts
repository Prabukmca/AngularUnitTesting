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
      const req = httpTestingController.expectOne("http://localhost:3000/layers");
      req.flush({});
    });
  });
});
