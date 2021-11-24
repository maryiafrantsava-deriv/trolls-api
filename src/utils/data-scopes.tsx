export type DataScopesPropTypes = {
    id: string;
    type: string;
    value: string;
    label: string;
}

export const data_scopes: Array<DataScopesPropTypes> = [
    {   id: "read-scope",
        type: "checkbox", 
        value: "read", 
        label: "Read: View account activity" 
    },
    {   id: "trade-scope", 
        type: "checkbox", 
        value: "trade", 
        label: "Trade: Buy and sell contracts" 
    },
    {   id: "trading_information-scope", 
        type: "checkbox", 
        value: "trading_information", 
        label: "Trading Information: View trading and balance information" 
    },
    {   id: "payments-scope", 
        type: "checkbox", 
        value: "payments", 
        label: "Payments: Cashier (Deposit, Withdraw)" 
    },
    {   id: "admin-scope", 
        type: "checkbox", 
        value: "admin", 
        label: "Admin: API token management, application management" 
    },
];