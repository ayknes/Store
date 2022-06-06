import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopTabsComponent } from './laptop-tabs.component';

describe('LaptopTabsComponent', () => {
  let component: LaptopTabsComponent;
  let fixture: ComponentFixture<LaptopTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
