import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40 40"
      {...props}
      className={clsx(
        'h-6 w-6 fill-[#240934] dark:fill-[#09bcef]',
        props.className,
      )}
    >
      <path d="M3.122 5.311H13.1v20.367h13.855V5.311h9.923l-8.433 8.611V26.067L19.989 34.689 11.545 26.067V13.922Z" />
    </svg>
  );
}
