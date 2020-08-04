import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import { Column } from '../models/column';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-manager-column',
  templateUrl: './task-manager-column.component.html',
  styleUrls: ['./task-manager-column.component.css']
})
export class TaskManagerColumnComponent implements OnInit {

  @Input() column: Column;
  @Output() editTaskNotify = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(id) {
    let tasks = this.taskService.tasks;
    tasks = tasks.filter((task) => task.id != id);
    this.taskService.setTasks(tasks);
    this.taskService.notifyAdd$.next(true);
  }

  editTask(task: Task) {
    this.editTaskNotify.emit(task);
  }
}
