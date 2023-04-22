import { FC } from "react";
import { useTranslation } from "next-i18next";

export const Button: FC = () => {
  const { t } = useTranslation();
  return <button>{t('click')}</button>;
};
