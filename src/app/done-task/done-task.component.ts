import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  @Input()
  doneTasksList: Array<string> = [];
  @Output()
  emitRestore = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  restore(task: string) {
    this.emitRestore.emit(task);
  }
}
