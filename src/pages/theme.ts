import { type CustomFlowbiteTheme } from "flowbite-react";

export const flowbiteTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      active: {
        off: "bg-gray-800",
        on: "bg-cyan-800",
      },
    },
  },
  accordion: {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "py-5 px-5 last:rounded-b-lg primaryBgColor first:rounded-t-lg",
    },
    title: {
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-600 dark:text-gray-400",
      flush: {
        off: "hover:bg-yellow-600",
        on: "bg-transparent",
      },
      open: {
        off: "",
        on: "text-gray-100 bg-yellow-600",
      },
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          gray: "bg-white textPrimary",
        },
      },
    },
  },
};
