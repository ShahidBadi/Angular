import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Py4Component } from './py4.component';

describe('Py4Component', () => {
  let component: Py4Component;
  let fixture: ComponentFixture<Py4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Py4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Py4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
