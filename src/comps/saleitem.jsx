import React from "react";
import Image from 'next/image';
import styles from './../styles/LaFStore.module.css'
import { notNull } from "@/lib/actions";

const SaleItem = (props) => {
    return (
        <a href={"https://neftyblocks.com/marketplace/listing/" + props.sale_id} target="new">
        <div className={styles.itemscontainer}>
            <p>{props.sale_id}</p>
            <div className={styles.imgcontainer}>
                <div>
                <Image src={props.img} fill={true} alt={props.name} />
                </div>
            </div>
            <div className={styles.coll}><Image src={props.colcImg} width={20} height={20} alt={props.collection}/>{props.collection}</div>
            <p>{props.name}</p>
            <div className={styles.price}>Price: {props.listing_price} {props.crypto}</div>
            <div className={styles.grid1}>
                <div>{notNull(props.min)}</div>
                <div>{notNull(props.avg)}</div>
                <div>{notNull(props.max)}</div>
                <div>Low</div>
                <div>Avg</div>
                <div>High</div>              
            </div>
        </div>
        </a>
    );
};

export default SaleItem;