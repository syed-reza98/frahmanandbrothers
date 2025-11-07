import { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring focus:ring-emerald-400/40 dark:text-emerald-300 ${className}`}
      {...rest}
    />
  );
}
