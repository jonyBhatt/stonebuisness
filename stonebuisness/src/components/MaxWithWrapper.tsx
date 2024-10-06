import { cn } from "@/lib/utils";

interface MaxWithWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWithWrapper({
  children,
  className,
}: MaxWithWrapperProps) {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
