import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpriceComponent } from './masterprice.component';

describe('MasterpriceComponent', () => {
  let component: MasterpriceComponent;
  let fixture: ComponentFixture<MasterpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
