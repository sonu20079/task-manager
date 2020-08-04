import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerColumnComponent } from './task-manager-column.component';

describe('TaskManagerColumnComponent', () => {
  let component: TaskManagerColumnComponent;
  let fixture: ComponentFixture<TaskManagerColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
