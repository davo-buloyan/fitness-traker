import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrianingComponent } from './stop.training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer!: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress += 20;
      if (this.progress >= 100) clearInterval(this.timer);
    }, 1000);
  }

  onStop() {
    const dialogRef = clearInterval(this.timer);
    this.dialog.open(StopTrianingComponent, {
      data: {
        progress: this.progress,
      },
    });
    dialogRef.afterCLosed().subscribe((result: any) => {
      console.log(result);

    });
  }
}
