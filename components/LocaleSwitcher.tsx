import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const localActive = useLocale();

  return <LocaleSwitcherSelect localActive={localActive} />;
}
