import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeninasComponent } from './meninas.component';

describe('MeninasComponent', () => {
  let component: MeninasComponent;
  let fixture: ComponentFixture<MeninasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeninasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeninasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
