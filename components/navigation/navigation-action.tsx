"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        {/* sidebar button */}
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[14px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-violet-500">
            <Plus
              className="group-hover:text-white transition text-violet-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;