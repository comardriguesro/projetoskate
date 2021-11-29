import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizaveisComponent } from './customizaveis.component';

describe('CustomizaveisComponent', () => {
  let component: CustomizaveisComponent;
  let fixture: ComponentFixture<CustomizaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizaveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
