/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { createI18n } from 'vue-i18n';

// Types
import type { App } from 'vue'

import pt_BR from '@/i18n/pt_BR.json';

const messages = { pt_BR };
const i18n = createI18n({
  locale: 'pt_BR',
  messages,
});

export function registerPlugins (app: App) {
  app
    .use(i18n)
    .use(vuetify)
    .use(router)
}
