import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { ActiveTasksInfo } from '../../../@core/data/active-tasks';
import { ActiveTasksCacheService } from '../../../@core/data/active-tasks-cache';
import { PROVINCES } from '../../../@core/data/province-districts.geo';
import { ActiveTasksService } from '../../../@core/mock/active-tasks.service';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { DialogData } from '../case.model';



const OnDestroySubject = Symbol('OnDestroySubject');

@Component({
  selector: 'cov-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit, OnDestroy {


  provinces: string[];
  destinationOpts: string[] | undefined;
  addressOpts: string[] | undefined;
  finalDestProvince: string = '';
  districts = { destinationOpts: null, addressOpts: null };

  saveToCache = true;
  newTask: ActiveTasksInfo = {
    date: null,
    lab: '',
    case: '',
    phone: null,
    province: '',
    district: '',
    municipal: '',
    ward: null,
    assignedTo: '',
    time: ''
  };

  activeTaskCacheService: ActiveTasksCacheService;

  private [OnDestroySubject] = new ReplaySubject<true>(1);

  showOtherOccupation = false;

  constructor(
    public t: TranslationServiceEn,
    private translator: TranslateService,
    private activeTaskService: ActiveTasksService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
      translator.use('en');
  }

  ngOnInit() {
    this.provinces = PROVINCES?.map(province => province.name);
    if (this.activeTaskCacheService.isCacheActive()) {
      this.newTask = this.activeTaskCacheService.getFromCache();
    }
  }

  ngOnDestroy(): void {
    if (this.saveToCache) {
      this.activeTaskCacheService.writeToCache(this.newTask);
    }

    this[OnDestroySubject].next(true);
    this[OnDestroySubject].complete();
  }

  get onDestroy$() {
    return this[OnDestroySubject].asObservable();
  }

  addNewTask(event: any) {
    this.saveToCache = false;
    this.activeTaskCacheService.resetCache();
    // this.activeTaskService.createActiveTasksData(this.newTask);
  }

  changeDestProvince(event: string) {
    this.finalDestProvince = event;
    this.districts.destinationOpts = PROVINCES?.find(province => province.name === this.finalDestProvince)?.districts;
  }

}
