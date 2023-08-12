import { ImageResponse } from 'next/server';
import LogoIcon from './icons/logo';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#240934]">
        <div tw="flex flex-none items-center justify-center border border-gray-700 h-[160px] w-[160px] rounded-3xl">
          <LogoIcon width="64" height="58" fill="#09bcef" className="outline-gray-50" />
        </div>
        <p tw="mt-12 text-7xl font-bold text-[#09bcef]">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer()
          ),
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}
