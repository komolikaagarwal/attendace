import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyformComponent } from './facultyform.component';

describe('FacultyformComponent', () => {
  let component: FacultyformComponent;
  let fixture: ComponentFixture<FacultyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
