import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Computer } from '../../../models/computer.model';
import { ComputerService } from '../../../services/computer.service';
import { ComputerFormsComponent } from '../computer-forms/computer-forms.component';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css'],
})
export class ComputerListComponent implements OnInit {
  @ViewChild(ComputerFormsComponent, { static: false })
  myComputerForms: ComputerFormsComponent;

  createStatus = false;
  editStatus = false;

  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  computers: Computer[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private computerService: ComputerService
  ) {}

  ngOnInit(): void {
    this.dtTable();
    this.getAllComputer();
  }

  getAllComputer() {
    this.computerService.getAllComputer().subscribe(
      (next) => (this.computers = next),
      (error) => (this.computers = [])
    );
  }

  dtTable() {
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      //pageLength: 15,
      // dom: 'lBfrtip',
      // buttons: [
      //   {
      //     text: 'Tạo máy',
      //     attr: {
      //       id: 'btn-computer-create',
      //       class: 'btn btn-primary',
      //     },
      //     action: () => {
      //       $('#btn-computer-create')
      //         .attr('data-toggle', 'modal')
      //         .attr('data-target', '#computerCreate');
      //     },
      //   },
      // ],
    };

    /* this.computerService.getAllComputer().subscribe(
      (next) => (this.computers = next),
      (error) => (this.computers = [])
    ); */
  }

  onCreate() {
    this.createStatus = true;
    //this.myComputerForms.computerForms.reset();
    this.myComputerForms.computerForms.get('computerId').enable();
    //this.myComputerForms.computerForms.get('computerId').setValue(this.computers.length + 1);

    this.myComputerForms.computerForms.patchValue({
      computerId: this.computers.length + 1,
      computerLocation: 'Máy ' + (this.computers.length + 1),
      computerStatus: 'on',
    });
  }

  onEdit(computer, id) {
    this.editStatus = true;
    this.myComputerForms.computerForms.get('computerId').disable();

    this.myComputerForms.computerForms.patchValue({
      computerId: id,
      computerLocation: computer.location,
      computerStatus: computer.status,
    });

    console.log(id + ': ' + computer.status);
  }

  submitComputer() {
    if (this.createStatus === true && this.editStatus === false) {
      this.createStatus = false;

      console.log('create');
      console.log(this.createStatus);
      console.log(this.editStatus);

      const com = {
        id: Number = this.myComputerForms.computerForms.value.computerId,
        location: String = this.myComputerForms.computerForms.value
          .computerLocation,
        status: String = this.myComputerForms.computerForms.value.computerStatus
          .val,
      };
      //this.computerService.createComputer(com);

      //console.log(com);
    }

    if (this.editStatus === true && this.createStatus === false) {
      this.editStatus = false;

      console.log('edit');
      console.log(this.createStatus);
      console.log(this.editStatus);
    }
  }

  /* onSubmit(computerForms) {}

  onReset() {
    this.myComputerForms.computerForms.reset();
  } */

  indexColumn() {
    /* var t = $('#tbl-computer').DataTable();
    t.on('order.dt search.dt', () => {
      t.column(0, { search: 'applied', order: 'applied' })
        .nodes()
        .each((cell, i) => {
          cell.innerHTML = i + 1;
        });
    }).draw(); */
  }
}
