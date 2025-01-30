import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Py3Component } from './py3.component';

describe('Py3Component', () => {
  let component: Py3Component;
  let fixture: ComponentFixture<Py3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Py3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Py3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
