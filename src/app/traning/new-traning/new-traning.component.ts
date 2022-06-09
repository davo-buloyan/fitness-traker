import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onStartTraining() {
    this.trainingStart.emit()
  }

}
