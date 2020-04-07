import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseComputerComponent } from './use-computer.component';

describe('UseComputerComponent', () => {
  let component: UseComputerComponent;
  let fixture: ComponentFixture<UseComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
