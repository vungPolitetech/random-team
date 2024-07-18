"use client";
import React, { Fragment, ReactNode, useEffect, useState } from "react";

export function HydrateWrapper({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="flex items-center justify-center" />;
  }

  return <Fragment>{children}</Fragment>;
}
