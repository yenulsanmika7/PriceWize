import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  product: Product;
}
 
const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-card_img-container">
        <Image 
          src={product.img}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>

        <div className="flex justify-between">
          {/* <p className="text-black opacity-50 text-lg capitalize">
            {product.category}
          </p> */}

          <p className="text-black text-[17px] opacity-50 text-lg font-semibold">
            <span>$</span>
            <span>{product?.price}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard