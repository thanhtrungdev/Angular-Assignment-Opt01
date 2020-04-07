import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFormsComponent } from './service-forms.component';

describe('ServiceFormsComponent', () => {
  let component: ServiceFormsComponent;
  let fixture: ComponentFixture<ServiceFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
