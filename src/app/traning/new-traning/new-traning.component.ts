import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../exercise.model';

import { TraningService } from '../training.service';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {
  exercises: Exercise[] = []
  exerciseForm =  new FormGroup ({
    exercise: new FormControl('null', [Validators.required]),
  })

  constructor(private trainingServise: TraningService) { }

  ngOnInit(): void {

    this.exerciseForm

    this.exercises = this.trainingServise.getAvailableExercises()
  }

  onStartTraining() {
    this.trainingServise.startExercise(this.exerciseForm.value.exercise)
  }

}
