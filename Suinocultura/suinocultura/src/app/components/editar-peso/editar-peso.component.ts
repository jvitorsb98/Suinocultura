import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.component.html',
  styleUrls: ['./editar-peso.component.css']
})
export class EditarPesoComponent {
  edicaoPesoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarPesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.edicaoPesoForm = new FormGroup({
      novoPeso: new FormControl(data.peso.peso, [Validators.required, Validators.min(0)]),
      novaData: new FormControl(data.peso.dt_pesagem, [Validators.required])
    });
  }

  salvarEdicao(): void {
    if (this.edicaoPesoForm.valid) {
      
    }
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
