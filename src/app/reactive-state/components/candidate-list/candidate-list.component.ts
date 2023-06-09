import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

  loading$!: Observable<boolean>;
  candidates$!: Observable<Candidate[]>;

  constructor(private candidatesService: CandidatesService) {
    
  }
 
  ngOnInit(): void {
    this.InitObservables();
    this.candidatesService.getCandidateFromServer()
  }

  private InitObservables() {
    this.loading$ = this.candidatesService.loading$;
    this.candidates$ = this.candidatesService.candidates$;
  }
}
