import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerFormsComponent } from './computer-forms.component';

describe('ComputerFormsComponent', () => {
  let component: ComputerFormsComponent;
  let fixture: ComponentFixture<ComputerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
