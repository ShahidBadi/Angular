import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayobjectcrudComponent } from './arrayobjectcrud.component';

describe('ArrayobjectcrudComponent', () => {
  let component: ArrayobjectcrudComponent;
  let fixture: ComponentFixture<ArrayobjectcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayobjectcrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayobjectcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
