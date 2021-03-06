import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveTasksInfo } from '../../@models/cict/covhub/active-tasks';


@Injectable({
  providedIn: 'root'
})
export class ActiveTasksService {


  private activeTasksInfoArr: ActiveTasksInfo[] = [
    {
      case: 'Ram Thapa',
      assignedTo: 'Dr. Hari Bahadur',
      time: '3 Hr.'
    },
    {
      case: 'Krishna Maharjan',
      assignedTo: 'Dr. Hari Bahadur',
      time: '2 Hr.'
    },
    {
      case: 'Bipin Sitaula',
      assignedTo: 'Dr. Nirmala KC',
      time: '1 Hr.'
    },
    {
      case: 'Jiwan Bista',
      assignedTo: 'Dr. Ram Krishna Dhakal',
      time: '6 Hr.'
    }
  ];

  private activeTasksInfoData$: BehaviorSubject<ActiveTasksInfo[]>;

  constructor() {
    this.activeTasksInfoData$ = new BehaviorSubject(this.activeTasksInfoArr);
  }

  getActiveTasksData(): Observable<ActiveTasksInfo[]> {
    return this.activeTasksInfoData$.asObservable();
  }
}
