import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ja', title: '日本語' },
        { value: 'en', title: 'English' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withI18next]
};

export default preview;
