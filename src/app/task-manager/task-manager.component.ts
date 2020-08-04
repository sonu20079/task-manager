import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task, TaskData, column_type } from '../models/task';
import { Column, COLUMNS } from '../models/column';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {

  constructor(private taskService: TaskService) { }
  columns: Column[] = [];
  @Output() editNotify = new EventEmitter();


  ngOnInit(): void {
    this.getColumnData();
    this.taskService.notifyAdd$.subscribe(() => {
      this.getColumnData()
    })
  }

  getColumnData() {
    this.columns = COLUMNS;
    let tasks: Task[] = this.taskService.getTasks();
    this.columns.forEach((column) => {
      column.tasks = [];
    })
      tasks.forEach(task => {
        switch(task.column) {
          case column_type.pending: 
            this.columns[0].tasks.push(task)
            break;
          case column_type.in_process:
            this.columns[1].tasks.push(task)
            break;
          default:
            this.columns[2].tasks.push(task)
            break;
        }
      });
  }
  notifyTaskEdit(task: Task) {
    this.editNotify.emit(task);
  }
}
