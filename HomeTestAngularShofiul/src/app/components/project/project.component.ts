import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  elements: any = [];
  previous: any = [];
  headElements = ['Id', 'ProjectName', 'Phone', 'Address', 'Action'];
  firstItemIndex;
  lastItemIndex;


  public projects:Array<Project> = new Array<Project>();

  constructor(
    private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef,
    private _projectService: ProjectService) {
  }

  ngOnInit() {
    this.getAllContacts();
  
    
  }

  getAllContacts() {
    this._projectService.getAllProjects().subscribe(
        responseAllProjects => {
            Object.assign(this.projects, responseAllProjects);
            
            for(const project of this.projects) {
      
            this.elements.push({  Id: project.id, 
                                  Name: project.projectName, 
                                  Phone: project.phone, 
                                  Address: project.address });
          }
      
          this.tableService.setDataSource(this.elements);
          this.elements = this.tableService.getDataSource();
          this.previous = this.tableService.getDataSource();
        },
        error => {
            console.log(<any> error);
        }
    );
}

deleteProject(id){
  this._projectService.deleteProject(id).subscribe(
    response => {
        this.elements = this.elements.filter(item => item.Id != id);
    }, error=> {
      console.log(error);
    });
}

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
}
