import { Observable } from 'rxjs';
export interface DialogData {
  newId: string;
  title: Observable<string | any>;
}
