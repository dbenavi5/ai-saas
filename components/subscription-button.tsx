"use client";

import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const resonse = await axios.get("/api/stripe");

      window.location.href = resonse.data.url;
    } catch (error: any) {
      toast.error("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
