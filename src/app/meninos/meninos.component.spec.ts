import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeninosComponent } from './meninos.component';

describe('MeninosComponent', () => {
  let component: MeninosComponent;
  let fixture: ComponentFixture<MeninosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeninosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeninosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
