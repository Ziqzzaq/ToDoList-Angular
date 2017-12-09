import {Component, OnInit} from '@angular/core';
import {AsyncLocalStorage} from 'angular-async-local-storage';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(protected storage: AsyncLocalStorage) {}
  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];
  add(task: string) {
    this.tasksList.push(task);
    this.saveTasksList();
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.saveTasksList();
  }
  done(task: string) {
    this.doneTasksList.push(task);
    this.remove(task);
    this.saveTasksList();
  }
  restore(task: string) {
      this.doneTasksList = this.doneTasksList.filter(e => e !== task);
      this.tasksList.push(task);
      this.saveTasksList();
  }
  clear() {
      this.tasksList = [];
      this.saveTasksList();
  }
  saveTasksList() {
    this.storage.setItem('tasks', this.tasksList).subscribe( () => {}, () => {});
    this.storage.setItem('doneTasks', this.doneTasksList).subscribe( () => {}, () => {});
  }
  loadTasksList() {
      this.storage.getItem('tasks').subscribe((someArray: any[]) => {
          if (someArray.length > 0) {
              this.tasksList = someArray;
          }
      });
      this.storage.getItem('doneTasks').subscribe((someArray: any[]) => {
          if (someArray.length > 0) {
              this.doneTasksList = someArray;
          }
      });
  }
  public ngOnInit(): void {
    this.loadTasksList();
  }
}
