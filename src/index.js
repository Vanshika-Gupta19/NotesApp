import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      <App />
      </BaseProvider>
    </StyletronProvider>
);
