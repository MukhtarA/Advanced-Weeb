import 'bootstrap-4-grid';

import { configure } from '@storybook/react'

function loadStories () {
  document.body.style.fontFamily = 'sans-serif';
  document.body.style.boxSizing = 'border-box';
  document.body.style.margin = 0;
}

configure(loadStories, module);
