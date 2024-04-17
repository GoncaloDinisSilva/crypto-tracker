// CryptoList.tsx
import React from "react";
import { CryptoItem } from "./CryptoItem";
import { Table } from "antd";
import styles from "../styles/CryptoList.module.css";

interface CryptoListProps {
    cryptoData: any[];
}

export const CryptoList: React.FC<CryptoListProps> = ({ cryptoData }) => {
    // Here we define the columns for the Ant Design table
    const columns = [
        {
            title: 'Logo',
            dataIndex: 'logo',
            render: (logo: string, record: any) => (
                <CryptoItem crypto={record} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Symbol',
            dataIndex: 'symbol',
        },
        {
            title: 'Price',
            dataIndex: 'current_price',
            render: (price: number) => `$${price}`,
        },
    ];

    // Here we format the cryptoData for the table dataSource
    const dataSource = cryptoData.map((crypto, index) => ({
        key: index,
        logo: `/images/${crypto.name.toLowerCase()}.png`, // Pass image URL to render in CryptoItem
        name: crypto.name,
        symbol: crypto.symbol,
        current_price: crypto.current_price,
    }));

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            size="middle"
            pagination={false}
        />
    );
};
