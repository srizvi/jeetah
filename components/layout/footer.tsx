import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton =
    'w-full h-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-gray-500 dark:text-gray-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-gray-200 px-6 py-12 text-sm dark:border-gray-700 md:flex-row md:gap-12 md:px-4 xl:px-0">
        <div>
          <Link
            className="flex items-center gap-2 text-gray-950 dark:text-gray-50 md:pt-1"
            href="/"
          >
            <LogoSquare />
            <span className="text-base font-black uppercase tracking-wider lg:text-lg">
              {SITE_NAME}
            </span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-gray-200 py-6 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 xl:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-gray-400 md:inline-block" />
          <p>Designed in California</p>
        </div>
      </div>
    </footer>
  );
}
