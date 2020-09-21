import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiveTasksCacheService } from '../../../@core/data/active-tasks-cache';
import { NewCaseComponent } from '../new-case/new-case.component';


@Component({
  selector: 'cov-case-banner',
  templateUrl: './case-banner.component.html',
  styleUrls: ['./case-banner.component.scss']
})
export class CaseBannerComponent implements OnInit {

  activeTasksCacheService = new ActiveTasksCacheService();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  showNewCaseWindow(): boolean {
    const dialogRef = this.dialog.open(NewCaseComponent,
      {
        width: '60vw',
        data: {
          title: 'Add New Case',
          newId: '12321'
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
    return false;   // stop event propagation for <a> tag
  }

  showSettingsWindow(): boolean {
    return false;   // stop event propagation for <a> tag
  }

}
