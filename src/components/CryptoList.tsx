import React from "react";
import { CryptoItem } from "./CryptoItem";

interface CryptoListProps {
    cryptoData: any[];
}

export const CryptoList: React.FC<CryptoListProps> = ({ cryptoData }) => {
    return (
        <div>
            {cryptoData.map((crypto: any) => (
                <CryptoItem key={crypto.id} crypto={crypto} />
            ))}
        </div>
    )
}