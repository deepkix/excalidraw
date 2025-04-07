import * as RadixTabs from "@radix-ui/react-tabs";

import type { SidebarTabName } from "../../types";
import { useI18n } from "@excalidraw/excalidraw/i18n";

export const SidebarTabTrigger = ({
  children,
  tab,
  onSelect,
  ...rest
}: {
  children: React.ReactNode;
  tab: SidebarTabName;
  onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect">) => {
  const { t } = useI18n();

  return <></>; //{t("search.title")}
  // return (
  //   <RadixTabs.Trigger value={tab} asChild onSelect={onSelect}>
  //     <button
  //       type={"button"}
  //       className={`excalidraw-button sidebar-tab-trigger`}
  //       {...rest}
  //     >
  //       {children}
  //     </button>
  //   </RadixTabs.Trigger>
  // );
};
SidebarTabTrigger.displayName = "SidebarTabTrigger";
