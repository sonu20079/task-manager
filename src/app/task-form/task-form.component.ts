import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskData, column_type } from '../models/task';
import { TaskService } from '../services/task.service';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  priorities = [{  value: 'S1' }, { value: 'S2' }, {  value: 'S3' }]
  column_type = [{  value: column_type.pending }, { value: column_type.in_process }, {  value: column_type.completed }]
  model: any = { title: '', description: '', priority: 'S1', date: null, column_type: column_type.pending };
  @ViewChild('taskForm') taskForm: NgForm;
  
  @Input() editTask;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    console.log(this.editTask)
    if(this.editTask) {
      this.model.title = this.editTask.title;
      this.model.description = this.editTask.description;
      this.model.priority = this.editTask.priority;
      this.model.date = this.editTask.createdDate;
      this.model.column_type = this.editTask.column;
    }
  }

  submitForm(form: NgForm) {
    console.log()
    let tasks = this.taskService.getTasks();
    const task: TaskData = {
      title: form.value.title,
      description: form.value.description,
      createdDate: new Date(form.value.date.year, form.value.date.month, form.value.date.day),
      id: 0,
      column: form.value.column_type,
      priority: form.value.priority
    }
    if(this.editTask) {
     const index = this.getTaskById(tasks, this.editTask.id);
     task.id = this.editTask.id;
     tasks[index] = task;
    } else {
      let max = 0;
      tasks.forEach(task => {
        if (task.id > max) {
          max = task.id;
        }
      });

      task.id = max ? max + 1: 1;
    
      tasks.push(task);
    }
    this.taskService.setTasks(tasks);
    this.taskService.notifyAdd$.next(true);
 
  }

  getTaskById(tasks, id) {
    return  tasks.map(function(x) {return x.id; }).indexOf(id);
  }
}
