import { ProjectView } from './ViewModel/ProjectView';

export class Contact {
    constructor(
        public id: any ='',
        public name: any = '',
        public details: any = '',
        public address: any = '',
        public projects: Array<ProjectView> = new Array<ProjectView>(),
    ) {}
}