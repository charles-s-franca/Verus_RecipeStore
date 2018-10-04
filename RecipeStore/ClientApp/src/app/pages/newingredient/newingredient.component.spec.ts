import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewingredientComponent } from './newingredient.component';

describe('NewingredientComponent', () => {
  let component: NewingredientComponent;
  let fixture: ComponentFixture<NewingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
