import { Province } from '../../../@core/data/country-provinces';

export interface NepaliDate {
  date: Date;
  mixEngNep: boolean;
}

export interface MultiNamed {
  commonNames: string[];
}

// TODO create union types
export type District = MultiNamed;
export type Municipality = MultiNamed;
export type Ward = MultiNamed;
export type Tole = MultiNamed;

export interface MatchA<T> {
  referredNames: string[];
  officialName: (collection: T) => string;
}

export interface NewCaseFormeta {
  reportedDate: Date;
  _reportedDate: NepaliDate;

  reportedInstitution: string;

  caseName: string;
  phoneNum: number;

  province: string;
  _province: MatchA<Province>;

  district: string;
  _district: MatchA<District>;

  municipality: string;
  _municipality: MatchA<Municipality>;

  wardNumber: number;
  _wardNumber: MatchA<Ward>;

  tole: string;
  _tole: MatchA<Tole>;

  caseInvestigator: string;
}
