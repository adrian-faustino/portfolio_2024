import { ReactNode } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  target?: HTMLAnchorElement["target"];
}

// Wrapper around Next Link component
export function Link({ href, target = "_blank", children }: LinkProps) {
  return (
    <NextLink href={href} target={target}>
      {children}
    </NextLink>
  );
}
