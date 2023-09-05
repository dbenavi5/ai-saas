"use client";

import { useEffect, useState } from "react";
import { MAX_FREE_COUNT } from "@/constants";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCountProps {
  isPro: boolean;
  apiLimitCount: number;
}

const FreeCounter = ({ isPro = false, apiLimitCount = 0 }: FreeCountProps) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-4">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
            </p>
            <Progress
              className="h-2"
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            className="w-full"
            variant="premium"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
