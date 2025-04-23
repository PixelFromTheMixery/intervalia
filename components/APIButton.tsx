import { MakeCallProps } from "@shared/types";

import { useState } from "react";

export function MakeCall<T extends { title?: string }>({ onCall }: MakeCallProps<T>) {

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<{ error: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await onCall();
      setData(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setError({ error: message });
    } finally {
      setLoading(false);
    }
  };

  return null
}
