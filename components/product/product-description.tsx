import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';

import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-gray-700">
        <h1 className="mb-4 text-3xl font-medium md:text-5xl">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 px-3 py-2 text-sm text-gray-50">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-base dark:text-gray-50/[60%] lg:text-lg"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
}
