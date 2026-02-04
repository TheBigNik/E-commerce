import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Product Name is required."]
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            require: [true, "Product must have price."],
            default: 0.00
        },
        image: {
            type: String,
            require: [true, 'image is required']
        },
        category: {
            type: String,
            require: true,
        },
        is_featured: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product