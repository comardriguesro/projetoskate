import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfeComponent } from './surfe.component';

describe('SurfeComponent', () => {
  let component: SurfeComponent;
  let fixture: ComponentFixture<SurfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
