import { ImageResponse } from 'next/server';

import LogoIcon from './icons/logo';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#240934]">
        <div tw="flex flex-none items-center justify-center border border-gray-700 h-[160px] w-[160px] rounded-3xl shadow-sm shadow-[#09bcef]">
          <LogoIcon
            width="150"
            height="150"
            fill="#09bcef"
            className="p-4 outline-gray-900"
          />
        </div>
        <p tw="mt-12 text-[180px] font-black uppercase tracking-wider text-gray-50 leading-none">
          {title}
        </p>
        <p tw="ms-auto text-center max-w-2xl mt-4 text-lg font-normal text-gray-400">
          Victory is a lifestyle. Excellence is a habit. Keep winning.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            new URL('../fonts/Inter-Bold.ttf', import.meta.url),
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
