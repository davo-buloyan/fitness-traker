import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TraningService } from './training.service';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.css']
})
export class TraningComponent implements OnInit, OnDestroy {
  onGoingraining = false
  exerciseSuscription!: Subscription;

  constructor(private trainingService: TraningService) { }

  ngOnInit(): void {
    this.exerciseSuscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if( exercise) {
          this.onGoingraining = true
        } else {
          this.onGoingraining = false
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.exerciseSuscription.unsubscribe()
  }

}
