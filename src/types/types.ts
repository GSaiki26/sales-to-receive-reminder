// Interface
export interface Sale {
  id: string;
  contaAzulId: number;
  number: number;
  emission: string;
  status: string;
  scheduled: boolean;
  customer: {
    id: string;
    name: string;
    company_name: string;
    email: string;
    person_type: string;
  };
  discount: {
    measure_unit: string;
    rate: number;
  };
  payment: {
    type: string;
    method: string;
    installments: [
      {
        number: number;
        value: number;
        due_date: string;
        status: string;
        note: string;
        hasBillet: boolean;
      }
    ];
    financial_account_id: string;
    financial_account: {
      uuid: string;
      name: string;
      accountType: string;
      billetConfigured: boolean;
    };
  };
  notes: string;
  shipping_cost: number;
  total: number;
  seller: {
    id: string;
    name: string;
  };
  category_id: string;
}
