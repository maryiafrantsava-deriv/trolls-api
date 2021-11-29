export type DataScopesPropTypes = {
    num: number;
    id: string;
    type: string;
    value: string;
    label: string;
}

export const data_scopes: Array<DataScopesPropTypes> = [
    {   num: 0,
        id: "read-scope",
        type: "checkbox", 
        value: "read", 
        label: "Read: View account activity" 
    },
    {   num: 1,
        id: "trade-scope", 
        type: "checkbox", 
        value: "trade", 
        label: "Trade: Buy and sell contracts" 
    },
    {   num: 2,
        id: "trading_information-scope", 
        type: "checkbox", 
        value: "trading_information", 
        label: "Trading Information: View trading and balance information" 
    },
    {   num: 3,
        id: "payments-scope", 
        type: "checkbox", 
        value: "payments", 
        label: "Payments: Cashier (Deposit, Withdraw)" 
    },
    {   num: 4,
        id: "admin-scope", 
        type: "checkbox", 
        value: "admin", 
        label: "Admin: API token management, application management" 
    },
];