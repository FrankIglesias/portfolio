interface IconProps {
  path: string;
  size?: number;
  className?: string;
}

export default function Icon({ path, size = 30, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}
