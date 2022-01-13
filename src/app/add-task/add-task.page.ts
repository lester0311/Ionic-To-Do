import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  categories = ['Work', 'Personal', 'Home'];

  taskName
  taskDate
  taskPriority
  taskCategory

  taskObject
  constructor(public modalCtrl:ModalController, public todoService: TodoService) { }

  ngOnInit() {
    //this.categories.push('Work');
    //this.categories.push('Personal');
  }

  async closed(){
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index) {
    this.taskCategory = this.categories[index];
  }

  async addTask(){
    this.taskObject = ({itemName: this.taskName, itemDueDate: this.taskDate, itemPriority: this.taskPriority, itemCategory: this.taskCategory});
    let uid = this.taskName + this.taskDate;
    
    if(uid){
      await this.todoService.addTask(uid, this.taskObject);
    } else {
      console.log("can't save empty task")
    }
    this.closed();
  }
}
