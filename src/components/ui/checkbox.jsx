"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { SquareCheckBigIcon, Square } from "lucide-react";

import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef(
  ({ checked, onCheckedChange, id, className, label, ...props }, ref) => {
    return (
      <button
        id={id}
        ref={ref}
        type="button"
        aria-pressed={checked}
        aria-checked={checked}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
        className={cn(
          "inline-flex items-center justify-center px-4 py-2 rounded-lg border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 select-none cursor-pointer ",
          checked
            ? "bg-purple-600 border-purple-600 text-white shadow-inner scale-95 hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.7)]"
            : "bg-slate-900 border-slate-500 text-slate-300 hover:bg-slate-800 hover:border-purple-400 hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.7)]",
          className
        )}
        {...props}
      >
        {checked ? (
          <span className="flex items-center gap-2">
            <SquareCheckBigIcon className="w-4 h-4" strokeWidth="2" />
            <span>{label}</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Square className="w-4 h-4" strokeWidth="2" />
            <span>{label}</span>
          </span>
        )}
      </button>
    );
  }
);
Checkbox.displayName = "Checkbox";
