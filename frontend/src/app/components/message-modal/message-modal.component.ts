import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {
  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string) {
  }

  close() : void {
    this.dialogRef.close()
  }
}
