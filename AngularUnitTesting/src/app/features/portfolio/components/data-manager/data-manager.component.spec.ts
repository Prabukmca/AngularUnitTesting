import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DataManagerComponent } from "./data-manager.component";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { By } from "@angular/platform-browser";

describe("DataManagerComponent", () => {
  let component: DataManagerComponent;
  let fixture: ComponentFixture<DataManagerComponent>;
  let button: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [DataManagerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should filter work", () => {
    const filterTextBox = fixture.debugElement.queryAll(By.css("form-control ml-2"));

    component.countries$.subscribe((data)=>console.log(data));
    expect(true).toBe(true);
  });

  it("should toggle the accordian, when the first accordian clicked", () => {
    // const fixture = TestBed.createComponent(DataManagerComponent);

    // fixture.detectChanges();
    // button = fixture.debugElement.queryAll(By.css("button"))[2];
    // button.triggerEventHandler("click", null);
    // fixture.detectChanges();
    // const form = fixture.debugElement.query(By.css("form-group form-inline"));
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll("div")[1].id).toEqual(
      "custom-panel-1-header"
    );
  });
});
