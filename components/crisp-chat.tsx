"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0b3b028e-4f40-4171-aabd-60632108d54d");
  }, []);
  return null;
};
