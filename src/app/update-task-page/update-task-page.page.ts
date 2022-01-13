import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task-page',
  templateUrl: './update-task-page.page.html',
  styleUrls: ['./update-task-page.page.scss'],
})
export class UpdateTaskPagePage implements OnInit {
  @Input() task;
  categories = ['Work', 'Personal', 'Home'];

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject
  
  constructor(public modalCtrl:ModalController, public todoService:TodoService) { }

  ngOnInit() {
    this.taskName = this.task.value.itemName;
    this.taskDate = this.task.value.itemDueDate;
    this.taskPriority = this.task.value.itemPriority;
    this.taskCategory = this.task.value.itemCategory;
  }

  selectedCategory(index) {
    this.taskCategory = this.categories[index];
  }
  async updated(){
    this.taskObject = ({itemName: this.taskName, itemDueDate: this.taskDate, itemPriority: this.taskPriority, itemCategory: this.taskCategory});
    let uid = this.task.key;
    await this.todoService.updated(uid, this.taskObject);
    this.closed();
  }
  async closed(){
    await this.modalCtrl.dismiss(this.taskObject);
  }

}
