import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init();
   }

  addTask(key, value){
    this.storage.set(key, value);
  }
  removed(key){
    this.storage.remove(key);
  }
  updated(key, value){
    this.storage.set(key, value);
    this.getTask();
  }
  getTask(){
    let task: any = [];
    this.storage.forEach((key, value, index) => {
      task.push({'key':value, 'value':key});
    });
    return task;
  }

  async init(){
    await this.storage.create();
  }
}
