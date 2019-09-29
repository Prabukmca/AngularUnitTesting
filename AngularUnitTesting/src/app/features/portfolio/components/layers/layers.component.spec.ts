import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayersComponent } from "./layers.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

describe("LayersComponent", () => {
  let component: LayersComponent;
  let fixture: ComponentFixture<LayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [LayersComponent],
      providers: [HttpClient],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should bind an title input with given value(async)", async(() => {
    component.title = "Updated title";
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const inputElement = fixture.debugElement.query(By.css("#title-input"));
      expect(inputElement.nativeElement.value).toBe("Updated title");
      // const inputElement = fixture.debugElement.query(
      //   By.css('input[name="title"]')
      // ).nativeElement;
      // inputElement.value = "Updated title";
      // inputElement.dispatchEvent(new Event("input"));
      // expect(inputElement.value).toBe("Updated title");
    });
  }));

  it("checkbox is checked if value is true", async(() => {
    component.value = true;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const inputElement = fixture.debugElement.query(By.css("#simpleInput"));
      expect(inputElement.nativeElement.checked).toBe(true);
    });
  }));
});
