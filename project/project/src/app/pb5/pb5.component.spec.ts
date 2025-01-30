import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pb5Component } from './pb5.component';

describe('Pb5Component', () => {
  let component: Pb5Component;
  let fixture: ComponentFixture<Pb5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pb5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
