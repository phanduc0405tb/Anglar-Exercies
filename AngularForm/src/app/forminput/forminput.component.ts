import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css']
})
export class ForminputComponent implements OnInit {

  contactForm: FormGroup;
  isBoolName = false;
  isBoolEmail = false;
  isBoolAge = false;
  currentRoles = ['Student', 'FullTimeJob', 'FullTimeLearner', 'Prefer not to say', 'Other'];
  likeMostFCCs = [ 'Chanllenges', 'Projects', 'Community', 'Open Source'];
  Skills = [
    { id: 1, name: 'Front-end Projects'},
    { id: 2, name: 'Back-end Projects'},
    { id: 3, name: 'Data Visualization'},
    { id: 4, name: 'Challenges'},
    { id: 5, name: 'Open Source Community'},
    { id: 6, name: 'Gitter help rooms'},
    { id: 7, name: 'Videos'},
    { id: 8, name: 'City Meetups'},
    { id: 9, name: 'Wiki'},
    { id: 10, name: 'Forum'},
    { id: 11, name: 'Additional Courses'}
  ];
  constructor() {
    const formControls = this.Skills.map(control => new FormControl(false));
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(5), Validators.required]),
      email: new FormControl('', [Validators.minLength(10), Validators.required] ),
      age: new FormControl(0, [Validators.min(5), Validators.required]),
      currentRole: new FormControl(),
      recommend: new FormControl('', Validators.required),
      likeMostFCC: new FormControl(),
      skill: new FormArray(formControls),
      comment: new FormControl()
  });
  }
  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    console.log(this.contactForm.controls['skill'].value);
    this.contactForm.controls.likeMostFCC.setValue('default');
    this.contactForm.controls.currentRole.setValue('default');
  }
  onSubmit() {
    this.contactForm.value.skill = this.contactForm.value.skill
      .map((checked, index) => checked ? this.Skills[index].name : null)
      .filter(value => value !== null);
    console.log(this.contactForm);
  }
}
