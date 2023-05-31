import { Schema, model, models } from 'mongoose';

const assetSchema = new Schema ({
    assetId: {
        type: Number,
        required: true,
    },
    collection: {
        type: String,
    },
    name: {
        type: String, 
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
    },
    crypto: {
        type: String,
    },
    flPrice: {
        type: Number,
    },
    tpPrice: {
        type: Number,
    },
    avgPrice: {
        type: Number,
    },
});

const Listing = models.Listing || model('asset', assetSchema);

export default Listing;