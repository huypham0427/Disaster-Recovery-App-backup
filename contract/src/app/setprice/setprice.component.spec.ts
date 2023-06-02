import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpriceComponent } from './setprice.component';

describe('SetpriceComponent', () => {
  let component: SetpriceComponent;
  let fixture: ComponentFixture<SetpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
