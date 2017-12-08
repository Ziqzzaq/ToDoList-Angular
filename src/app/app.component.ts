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

  newTask: string;
  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];
  o: Observable<any>;
  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    this.saveTasksList();
  }
  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.saveTasksList();
  }
  done(task) {
    this.doneTasksList.push(task);
    this.remove(task);
    this.saveTasksList();
  }
  restore(task) {
      this.doneTasksList = this.doneTasksList.filter(e => e !== task);
      this.tasksList.push(task);
      this.saveTasksList();
  }
  saveTasksList() {
    this.storage.setItem('tasks', this.tasksList).subscribe( () => {}, () => {});
    this.storage.setItem('doneTasks', this.doneTasksList).subscribe( () => {}, () => {});
  }
  loadTasksList() {
      this.o = this.storage.getItem('tasks');
      this.o.subscribe((someArray: any[]) => {
          if (someArray.length > 0) {
              this.tasksList = someArray;
          }
      });
      this.o = this.storage.getItem('doneTasks');
      this.o.subscribe((someArray: any[]) => {
          if (someArray.length > 0) {
              this.doneTasksList = someArray;
          }
      });
  }
  public ngOnInit(): void {
    this.loadTasksList();
  }
}
