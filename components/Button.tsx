import { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    />
  );
}
