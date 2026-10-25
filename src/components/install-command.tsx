import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";

export const InstallCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [command]);

  return (
    <div className="divide-foreground border-foreground flex divide-x border">
      <code className="min-w-0 flex-1 overflow-x-auto px-2.5 py-2 font-mono text-sm whitespace-nowrap">
        {command}
      </code>
      <Button onClick={copy} size="label" variant="ghost">
        {copied ? "copied" : "copy"}
      </Button>
    </div>
  );
};
