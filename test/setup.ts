import { beforeEach } from 'vitest';
import { config } from '@vue/test-utils';
import { Quasar } from 'quasar';

beforeEach(() => {
  config.global.plugins = [Quasar];
});
