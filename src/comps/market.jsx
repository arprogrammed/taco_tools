import React from 'react';
import useSWR from 'swr';
import SaleItem from '@/comps/saleitem';
import { useState } from "react";
import Pagination from "@/comps/pagination";
import Dropdown from "@/comps/filteroptions";
import styles from './../styles/LaFStore.module.css';
import { singleWordUpper, truncAtor } from '@/lib/stracts';
import { imgPicker, paginate, filters } from '@/lib/actions';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Market = () => {
    const [sortVal, setSortVal] = useState("ascending");
    
    const onSortChange = (value) => {
        setSortVal(value);   
    }

    const [currPage, setCurrPage] = useState(1);
    const pageSize = 16;

    const onPageChange = (page) => {
        setCurrPage(page);
    }

    const waxPrec = 100000000;
    const { data, error, isLoading } = useSWR(
        'https://wax.api.atomicassets.io/atomicmarket/v2/sales?state=1&seller=tqzke.c.wam&page=1&limit=100&order=desc&sort=created',
        fetcher
    );
    if (error) return <div>An error has occurred.</div>;
    if (isLoading) return <div>Loading...</div>;
    const newData = filters(data.data, sortVal);
    const paginatedPosts = paginate(newData, currPage, pageSize);
    return (
        <div className={styles.marketcontainer}>
            <Dropdown 
                sortValue={sortVal}
                onSortChange={onSortChange}
            />
            {paginatedPosts.map((item, index) => <SaleItem 
                key={index} 
                id={index} 
                sale_id={item.sale_id}
                collection={truncAtor(item.collection.name)}
                name={truncAtor(item.assets[0].name)}
                listing_price={(item.listing_price/waxPrec).toFixed(2)}
                crypto={singleWordUpper(item.listing_symbol)}
                min={item.assets[0].prices.map((r) => {return (r.min/waxPrec).toFixed(2)})}
                max={item.assets[0].prices.map((r) => {return (r.max/waxPrec).toFixed(2)})}
                avg={item.assets[0].prices.map((r) => {return (r.average/waxPrec).toFixed(2)})}
                img={imgPicker(item.assets[0])}
                colcImg={'https://atomichub-ipfs.com/ipfs/' + item.assets[0].collection.img}
            />)}
            <Pagination
                items={newData.length}
                currPage={currPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default Market;

