import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  public listUsers: User[] = [
    {
      id: 1,
      firstName: 'Belia',
      lastName: 'Guly',
      email: 'bguly0@51.la',
      gender: 'Female',
      dateOfBirth: '1983-06-01T20:36:22Z',
      salary: 9693,
      phone: '285-641-2889'
    },
    {
      id: 2,
      firstName: 'Rosalynd',
      lastName: 'Gerrelts',
      email: 'rgerrelts1@weibo.com',
      gender: 'Female',
      dateOfBirth: '1964-03-31T16:24:27Z',
      salary: 8951,
      phone: '142-282-1117'
    },
    {
      id: 3,
      firstName: 'Khalil',
      lastName: 'Joppich',
      email: 'kjoppich2@marketwatch.com',
      gender: 'Male',
      dateOfBirth: '1987-06-30T01:55:33Z',
      salary: 7627,
      phone: '207-413-0416'
    },
    {
      id: 4,
      firstName: 'Eric',
      lastName: 'Cobbled',
      email: 'ecobbled3@last.fm',
      gender: 'Male',
      dateOfBirth: '1989-11-06T10:39:32Z',
      salary: 6994,
      phone: '829-513-8650'
    },
    {
      id: 5,
      firstName: 'Jerry',
      lastName: 'Hucks',
      email: 'jhucks4@acquirethisname.com',
      gender: 'Male',
      dateOfBirth: '1978-10-21T00:04:06Z',
      salary: 6691,
      phone: '259-408-2766'
    },
    {
      id: 6,
      firstName: 'Terra',
      lastName: 'Brandassi',
      email: 'tbrandassi5@msn.com',
      gender: 'Female',
      dateOfBirth: '1994-04-28T11:41:35Z',
      salary: 8850,
      phone: '976-752-3381'
    },
    {
      id: 7,
      firstName: 'Sherline',
      lastName: 'Witherup',
      email: 'switherup6@army.mil',
      gender: 'Female',
      dateOfBirth: '1982-08-14T13:44:05Z',
      salary: 7493,
      phone: '586-222-5835'
    },
    {
      id: 8,
      firstName: 'Roseanna',
      lastName: 'Tayt',
      email: 'rtayt7@prweb.com',
      gender: 'Female',
      dateOfBirth: '1958-04-26T04:56:47Z',
      salary: 6301,
      phone: '469-888-7595'
    },
    {
      id: 9,
      firstName: 'Elyse',
      lastName: 'Pashan',
      email: 'epashan8@ca.gov',
      gender: 'Female',
      dateOfBirth: '1977-09-13T03:57:16Z',
      salary: 7027,
      phone: '815-749-3433'
    },
    {
      id: 10,
      firstName: 'Vincents',
      lastName: 'Fosken',
      email: 'vfosken9@hugedomains.com',
      gender: 'Male',
      dateOfBirth: '1994-04-02T09:29:13Z',
      salary: 9268,
      phone: '372-650-9874'
    },
    {
      id: 11,
      firstName: 'Maisey',
      lastName: 'Glassard',
      email: 'mglassarda@craigslist.org',
      gender: 'Female',
      dateOfBirth: '1973-05-04T19:40:37Z',
      salary: 8571,
      phone: '785-651-1686'
    }
  ];

  constructor() { }

  getAll() {
    return this.listUsers;
  }
}
