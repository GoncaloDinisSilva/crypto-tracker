import React, { useState } from "react";

interface CryptoItemProps {
    crypto: {
        id: string;
        name: string;
        symbol: string;
        current_price: number;
    };
}

export const CryptoItem: React.FC<CryptoItemProps> = ({ crypto }) => {
    return (
        <div>
            <p>Symbol: {crypto.symbol}</p>
            <p>Name: {crypto.name}</p>
            <p>Price: ${crypto.current_price}</p>
        </div>
    )
}