import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TraningService } from '../training.service';

import { StopTrianingComponent } from './stop.training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter()
  progress = 0;
  timer!: number;

  constructor(
    private dialog: MatDialog,
    private trianingService: TraningService
    ) {}

  ngOnInit(): void {
    this.startOrResumeTimer()
  }

  startOrResumeTimer() {
    const step = Number(this.trianingService.getAvailableExercises().duration ) / 100 * 1000
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) clearInterval(this.timer);
    }, step);
  }


  onStop() {
    const dialogRef = clearInterval(this.timer);
    this.dialog.open(StopTrianingComponent, {
      data: {
        progress: this.progress,
      }
    });
    // dialogRef.afterCLosed().subscribe((result: any) => {
    //   console.log(result);

    // });
  }
}
