import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

  listPlansHealth = [
    {
      id: 1,
      desc: 'Plano 300 Enfermaria'
    },
    {
      id: 2,
      desc: 'Plano 400 Enfermaria'
    },
    {
      id: 3,
      desc: 'Plano 500 Enfermaria'
    },
  ];

  listPlansDental = [
    {
      id: 1,
      desc: 'Plano Basic'
    },
    {
      id: 2,
      desc: 'Plano Medium'
    },
    {
      id: 3,
      desc: 'Plano Plus'
    },
  ];


  formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(5)]],
      healthPlan: [''],
      dentalPlan: [''],
    });
  }

  closeModal() { this.dialogRef.close(); }
}
