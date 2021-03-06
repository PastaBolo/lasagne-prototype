export interface Budget {
  id: number;
  portfolioId: number;
  assetId: number;
  name: string;
}

export interface BudgetVersion {
  id: number;
  budgetId: number;
  number: number;
  state: BudgetVersionState;
  stateDate: number;
  accountingPlan: AccountingPlan;
}

export interface AccountingPlan {
  comment?: string;
  [key: string]: string | {
    value: string;
    comment: string;
  };
}

export type BudgetWithVersionsAndRealised = Budget & {
  versions: (BudgetVersion & { stateUserName: string })[];
  previousYear: Blpp[];
  currentYear: Blpp[];
};

export enum BudgetVersionState {
  Pending,
  Submitted,
  Accepted,
  Rejected
}

declare type Blpp = any;
