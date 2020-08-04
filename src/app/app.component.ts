import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from './services/task.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editTask: Task;
  @ViewChild('mymodal') mymodal: TemplateRef<any>;
  constructor(private modalService: NgbModal, private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.notifyAdd$.subscribe(() => {
      this.closeModal()
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  notifyTaskEdit(task: Task) {
    this.modalService.open(this.mymodal)
    this.editTask = task;
  }

  closeModal() {
    this.editTask = null;
    this.modalService.dismissAll();
  }
}
