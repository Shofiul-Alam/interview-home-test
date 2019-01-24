import { ContactView } from './ContactView';

export class ProjectUpdate {
    constructor(
        public id: any ='',
        public projectName: any = '',
        public phone: any = '',
        public address: any = '',
        public projectDetails: any = '',
        public contacts: Array<any> = new Array<any>(),
        public contactList: Array<any> = new Array<any>()
    ) {}
}