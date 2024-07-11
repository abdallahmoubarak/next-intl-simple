"use client";
import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";

export default function LocaleSwitcherSelect({
  localActive,
}: {
  localActive: string;
}) {
  const [isPending, startTransition] = useTransition();
  const onChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only"> change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={(e) => onChange(e.target.value)}
        disabled={isPending}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </label>
  );
}
