import { Drawer } from "@base-ui/react/drawer";
import { useCallback, useState } from "react";

import { Mark } from "@/components/mark";
import { SiteIndex } from "@/components/site-index";

export const MobileIndex = () => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="rule-b bg-background px-gutter sticky top-0 z-40 flex items-center justify-between py-3 md:hidden">
      <a
        aria-label="Gross Poetry Systems"
        className="no-underline"
        href="#masthead"
      >
        <Mark className="block size-5" />
      </a>
      <Drawer.Root onOpenChange={setOpen} open={open} swipeDirection="down">
        <Drawer.Trigger className="label cursor-pointer">Index</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className="bg-foreground ease-drawer fixed inset-0 opacity-40 transition-opacity duration-450 data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:duration-0" />
          <Drawer.Viewport className="fixed inset-x-0 bottom-0 z-50">
            <Drawer.Popup className="rule-t pb-safe bg-background ease-drawer flex max-h-[80dvh] translate-y-(--drawer-swipe-movement-y) flex-col overflow-y-auto overscroll-contain pt-4 transition-transform duration-450 outline-none data-ending-style:translate-y-full data-starting-style:translate-y-full data-swiping:select-none">
              <Drawer.Content>
                <div className="px-gutter mb-4 flex items-center justify-between">
                  <Drawer.Title className="label m-0 font-normal">
                    Index
                  </Drawer.Title>
                  <Drawer.Close className="label cursor-pointer">
                    Close
                  </Drawer.Close>
                </div>
                <SiteIndex onNavigate={close} />
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
