import { ProjectView } from './ViewModel/ProjectView';
import { ContactView } from './ViewModel/ContactView';

export class Project {
    constructor(
        public id: any ='',
        public projectName: any = '',
        public phone: any = '',
        public address: any = '',
        public projectDetails: any = '',
        public contactList: Array<any> = new Array<any>(),
        public contacts: Array<ContactView> = new Array<ContactView>()
    ) {}
}