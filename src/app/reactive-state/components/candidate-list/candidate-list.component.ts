import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { CandidateSearchType } from '../../enums/candidate-search-type.enum';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

  loading$!: Observable<boolean>;
  candidates$!: Observable<Candidate[]>;
  searchCtrl!: FormControl;
  searchTypeCtrl!: FormControl;
  searchTypeOption!: {
    value:CandidateSearchType,
    label:string
  }[];

  constructor(private candidatesService: CandidatesService,
    private formBuilder: FormBuilder) {}
 
  ngOnInit(): void {
    this.initForm();
    this.InitObservables();
    this.candidatesService.getCandidateFromServer();
  }

  private initForm() {
    this.searchCtrl = this.formBuilder.control('');
    this.searchTypeCtrl = this.formBuilder.control(CandidateSearchType.LASTNAME);
    this.searchTypeOption = [
        { value: CandidateSearchType.LASTNAME, label: 'Nom' },
        { value: CandidateSearchType.FIRSTNAME, label: 'Prénom' },
        { value: CandidateSearchType.COMPANY, label: 'Entreprise' }
    ];
}

  private InitObservables() {
    this.loading$ = this.candidatesService.loading$;

    const search$ = this.searchCtrl.valueChanges.pipe(
    startWith(this.searchCtrl.value),
    map(value => value.toLowerCase())
);

const searchType$: Observable<CandidateSearchType> = this.searchTypeCtrl.valueChanges.pipe(
    startWith(this.searchTypeCtrl.value)
);

    this.candidates$ = combineLatest ([
      search$,
      searchType$,
      this.candidatesService.candidates$
    ]).pipe(
      map(([search, searchType, candidates]) => candidates.filter(candidate => candidate[searchType]
        .toLowerCase()
        .includes(search)))
    );
  }
}
