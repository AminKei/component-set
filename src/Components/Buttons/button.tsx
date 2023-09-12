import { FC } from "react";


interface ButtonProps {
    bgcolor?: string,
    color?: string,
    children?: React.ReactNode;
}

export const Button:FC<ButtonProps>   =  ({bgcolor, color, children}) => {

    return ( 
        <button 
            style={{
                backgroundColor: bgcolor || "#1976d2",
                color: color || "#fff",
                padding: "6px 16px",    
                fontSize:'14px',
                minWidth: "112px",
                minHeight: "36px",
                border:"none",
                fontWeight: "bold",
                borderRadius:"5px"
            }}
        >
            {children}
        </button>
     );
}
 