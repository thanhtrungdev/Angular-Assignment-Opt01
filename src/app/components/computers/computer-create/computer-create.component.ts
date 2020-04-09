import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Computer } from '../../../models/computer.model';
import { ComputerService } from '../../../services/computer.service';

@Component({
  selector: 'app-computer-create',
  templateUrl: './computer-create.component.html',
  styleUrls: ['./computer-create.component.css'],
})
export class ComputerCreateComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal;

  computer: Computer;
  formComputerCreate: FormGroup;
  computerStatus = [
    { val: 'on', name: 'Chưa sử dụng' },
    { val: 'off', name: 'Đang sử dụng' },
    { val: 'repair', name: 'Đang sửa chữa' },
  ];

  constructor(
    private router: Router,
    private computerService: ComputerService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formComputerCreate = new FormGroup({
      computerId: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ])
      ),
      computerLocation: new FormControl('', Validators.required),
      computerStatus: new FormControl(
        this.computerStatus[0],
        Validators.required
      ),
    });
  }

  onSubmit() {
    // console.warn(this.formComputerCreate.value);
    // console.log(this.computerStatus[0]);
    //$('#modal').modal('toggle');
    // this.btnCloseModal.nativeElement.click();
    // this.router.navigate(['customers']);
    const com = {
      id: Number = this.formComputerCreate.value.computerId,
      location: String = this.formComputerCreate.value.computerLocation,
      status: String = this.formComputerCreate.value.computerStatus.val,
    };
    this.computerService.createComputer(com).subscribe(
      (next) => {
        //this.btnCloseModal.nativeElement.click();
        this.router.navigate(['customers']);
        //$('#tbl-computer').DataTable().ajax.reload();
        //$('#tbl-computer').DataTable().clear().rows.add(getDataFromServer()).draw();
        //this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['computers']));
      },
      (error) => console.error(error)
    );
  }
}
