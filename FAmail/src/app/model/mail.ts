import { Name } from './name';

export class Mail {
    folder: string;
    body: string;
    subject: string;
    from: string;
    to: string;
    date: string;
    senderName: Name;
    corpus: string;
    // tslint:disable-next-line:variable-name
    _id: string;
}
