import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-gray-950 transition-colors dark:border-gray-700 dark:text-gray-50">
      <ShoppingCartIcon
        className={clsx(
          'h-4 transition-all ease-in-out hover:scale-110 ',
          className,
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-[#08ABD9] text-[11px] font-medium text-gray-50 dark:bg-[#09bcef]">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
