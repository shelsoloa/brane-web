import Image from "next/image";

export function BraneBridgeLogo({
  className,
  width = 200,
  height = 200,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/images/branebridge-logo-green.svg"
      alt="BraneBridge logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
