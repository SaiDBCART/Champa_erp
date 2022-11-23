import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterslistComponent } from './counterslist.component';

describe('CounterslistComponent', () => {
  let component: CounterslistComponent;
  let fixture: ComponentFixture<CounterslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
