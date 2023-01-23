import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerpartComponent } from './computerpart.component';

describe('ComputerpartComponent', () => {
  let component: ComputerpartComponent;
  let fixture: ComponentFixture<ComputerpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
