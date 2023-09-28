import { cn } from '@/lib/util';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        'w-full cursor-pointer rounded-[4px] bg-primary py-3 text-white transition hover:bg-opacity-90',
        disabled && 'bg-gray-300'
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
