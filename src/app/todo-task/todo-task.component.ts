import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input()
  tasksList: Array<string> = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitClearTasksList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  remove(task: string) {
    this.emitRemove.emit(task);
  }
  done(task: string) {
    this.emitDone.emit(task);
  }
  clearTasksList(tasksList) {
    tasksList = [];
    this.emitClearTasksList.emit(tasksList);
  }
}
