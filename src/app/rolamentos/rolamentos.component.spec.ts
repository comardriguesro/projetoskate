import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolamentosComponent } from './rolamentos.component';

describe('RolamentosComponent', () => {
  let component: RolamentosComponent;
  let fixture: ComponentFixture<RolamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
