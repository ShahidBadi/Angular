import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfacultyComponent } from './detailfaculty.component';

describe('DetailfacultyComponent', () => {
  let component: DetailfacultyComponent;
  let fixture: ComponentFixture<DetailfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailfacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
