import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  notifyAdd$: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  getTasks(): Task[] {
    this.tasks =  JSON.parse(localStorage.getItem('tasks')) || [];
    return this.tasks;
  }

  setTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
