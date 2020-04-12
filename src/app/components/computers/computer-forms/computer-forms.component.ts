import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Computer } from '../../../models/computer.model';
import { ComputerService } from '../../../services/computer.service';

@Component({
  selector: 'app-computer-forms',
  templateUrl: './computer-forms.component.html',
  styleUrls: ['./computer-forms.component.css'],
})
export class ComputerFormsComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal;
  @Output() computerSubmit = new EventEmitter();

  modalTitle = '';

  computer: Computer;
  computerForms: FormGroup;
  computerStatus = [
    { val: 'off', name: 'Chưa sử dụng' },
    { val: 'on', name: 'Đang sử dụng' },
    { val: 'repair', name: 'Đang sửa chữa' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.computerForms = new FormGroup({
      /* computerId: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ])
      ), */
      computerId: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      computerLocation: new FormControl('', Validators.required),
      computerStatus: new FormControl(
        this.computerStatus[0],
        Validators.required
      ),
    });
  }

  get field() {
    return this.computerForms.controls;
    // <span *ngIf="field.computerId.errors.required"> Không được trống.</span>
  }

  /* get computerId() {
    return this.computerForms.get('computerId'); //<span *ngIf="computerId.errors.required"> Không được trống.</span>
  } */

  onReset() {
    this.computerForms.reset();
  }

  onSubmit(id, location, status) {
    this.computerSubmit.emit({
      id,
      location,
      status,
    });
    //this.computerSubmit.emit();
    this.btnCloseModal.nativeElement.click();
    // console.log(id);
    // console.log(location);
    // console.log(JSON.stringify(status));
  }
}
