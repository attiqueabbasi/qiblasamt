import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, messagesByLocale } from './config';

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: messagesByLocale[defaultLocale],
  };
});
