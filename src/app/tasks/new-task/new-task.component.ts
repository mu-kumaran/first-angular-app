import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  // using signals
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  onCancel(){
    this.cancel.emit();
  }
}
