import { Injectable } from '@angular/core';
import { AppService } from './base/app.service';
import { Project } from '../models/Project';
import { ProjectUpdate } from '../models/ViewModel/ProjectUpdate';
import { ContactAdd } from '../models/ViewModel/ContactAdd';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  public url: string;
  public project: Project = new Project();
  constructor(    
    private _appService: AppService ) 
    { 
      this.url = _appService.serverURL;
    }
  
    public getAllProjects() {
      const endpoint = '/projects';
      return this._appService.get<Response>(endpoint);
    }

    public createProject(project: Project){
      const endpoint = '/projects/add';
      return this._appService.post(endpoint, project);
    }

    public getProject(id) {
      const endpoint = '/projects/'+id;
      return this._appService.get(endpoint);
    }

    public updateProject(id, project: ProjectUpdate) {
      const endpoint = '/projects/update/'+id;
      return this._appService.put(endpoint, project);
    }

    public deleteProject(id) {
      const endpoint = '/projects/'+id;
      return this._appService.delete(endpoint);
    }

    public addContactToProject(id, contact: ContactAdd) {
      const endpoint = "/projects/"+id+"/add-contact";
      return this._appService.post(endpoint, contact);
    }
}
