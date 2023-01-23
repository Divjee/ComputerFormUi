import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerformComponent } from './computerform.component';

describe('ComputerformComponent', () => {
  let component: ComputerformComponent;
  let fixture: ComponentFixture<ComputerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
