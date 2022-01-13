import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPagePage } from '../update-task-page/update-task-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [];

  today: number = Date.now();
  constructor( public modalCtrl: ModalController, public todoService: TodoService) {
    this.getTask();
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    });
    modal.onDidDismiss().then(newTaskObj =>{
      this.getTask();
    });
    return await modal.present();
  }

  getTask(){
    this.todoList = this.todoService.getTask();
    console.log(this.todoService.getTask());
  }

  removed(key){
    this.todoService.removed(key);
    this.getTask();
  }

  async updated(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPagePage,
      componentProps: {task: selectedTask}
    });
    modal.onDidDismiss().then(()=>{
      this.getTask();
    });
    return await modal.present();
  }
}
