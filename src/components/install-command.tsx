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
      <code className="min-w-0 flex-1 px-2.5 py-2 font-mono text-sm wrap-anywhere">
        {command}
      </code>
      <Button
        aria-label={`copy install command: ${command}`}
        onClick={copy}
        size="label"
        variant="ghost"
      >
        {copied ? "copied" : "copy"}
      </Button>
      <output className="sr-only">{copied ? "Copied to clipboard" : ""}</output>
    </div>
  );
};
