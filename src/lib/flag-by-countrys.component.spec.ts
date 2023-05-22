import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagByCountrysComponent } from './flag-by-countrys.component';

describe('FlagByCountrysComponent', () => {
  let component: FlagByCountrysComponent;
  let fixture: ComponentFixture<FlagByCountrysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagByCountrysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagByCountrysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
