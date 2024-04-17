import React, { useState } from "react";
import styles from "../styles/CryptoItem.module.css";

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
        <>
            {/* The only item being displayed in this component is the logo since the rest of the content is being displayed in the Ant Design's table inside the CryptoList component*/}
            <img src={`/images/${crypto.name.toLocaleLowerCase()}.png`} alt={crypto.symbol} className={styles.crypto_image} />
        </>
    )
}