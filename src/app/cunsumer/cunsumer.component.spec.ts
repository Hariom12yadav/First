import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunsumerComponent } from './cunsumer.component';

describe('CunsumerComponent', () => {
  let component: CunsumerComponent;
  let fixture: ComponentFixture<CunsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
