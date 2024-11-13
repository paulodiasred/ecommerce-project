import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// Certifique-se de importar corretamente
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirmação</h1>
    <div mat-dialog-content>Tem certeza que deseja realizar esta ação?</div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancelar</button>
      <button mat-button [mat-dialog-close]="true">Confirmar</button>
    </div>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class ConfirmDialogComponent {}
