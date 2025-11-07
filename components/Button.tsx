import { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`rounded-lg border-2 border-green-600 bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    />
  );
}
