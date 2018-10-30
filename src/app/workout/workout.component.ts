import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  public categories: string[] = ['Beginner', 'Intermediate', 'Advanced'];

  constructor() { }

  ngOnInit() {
  }

}
