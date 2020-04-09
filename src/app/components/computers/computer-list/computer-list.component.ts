import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Computer } from '../../../models/computer.model';
import { ComputerService } from '../../../services/computer.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css'],
})
export class ComputerListComponent implements OnInit, OnDestroy {
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  computers: Computer[] = [];
  dtTrigger: Subject = new Subject();

  constructor(
    private http: HttpClient,
    private computerService: ComputerService
  ) {}

  ngOnInit(): void {
    this.dtTable();
    this.getAllComputer();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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
      dom: 'lBfrtip',
      buttons: [
        {
          text: 'Tạo máy',
          attr: {
            id: 'btn-computer-create',
            class: 'btn btn-primary',
          },
          action: () => {
            $('#btn-computer-create')
              .attr('data-toggle', 'modal')
              .attr('data-target', '#computerCreate');
          },
        },
      ],
    };

    /* this.computerService.getAllComputer().subscribe(
      (next) => (this.computers = next),
      (error) => (this.computers = [])
    ); */
  }

  indexColumn() {
    //var t = $('#tbl-computer').DataTable();
    /* t.on('order.dt search.dt', () => {
      t.column(0, { search: 'applied', order: 'applied' })
        .nodes()
        .each((cell, i) => {
          cell.innerHTML = i + 1;
        });
    }).draw(); */
  }
}
