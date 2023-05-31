import React from 'react';
import useSWR from 'swr';
import SaleItem from '@/comps/saleitem';
import styles from './../styles/LaFStore.module.css';
import { singleWordUpper, truncAtor } from '@/lib/stracts';
import { imgPicker } from '@/lib/actions';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Market = () => {
    const waxPrec = 100000000;
    const { data, error, isLoading } = useSWR(
        'https://wax.api.atomicassets.io/atomicmarket/v2/sales?state=1&seller=tqzke.c.wam&page=1&limit=100&order=desc&sort=created',
        fetcher
    );
    if (error) return <div>An error has occurred.</div>;
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div className={styles.marketcontainer}>
            {data.data.map((item, index) => <SaleItem 
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
        </div>
    );
}

export default Market;

