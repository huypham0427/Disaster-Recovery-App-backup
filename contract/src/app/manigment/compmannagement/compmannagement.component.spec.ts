import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompmannagementComponent } from './compmannagement.component';

describe('CompmannagementComponent', () => {
  let component: CompmannagementComponent;
  let fixture: ComponentFixture<CompmannagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompmannagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompmannagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
