import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complexform',
  templateUrl: './complexform.component.html',
  styleUrls: ['./complexform.component.scss']
})
export class ComplexformComponent implements OnInit {

mainForm!: FormGroup;

constructor(private formBuilder: FormBuilder) { }


ngOnInit(): void {
  
}

initMainForm(): void {
  this.mainForm = this.formBuilder.group({});
}
}
