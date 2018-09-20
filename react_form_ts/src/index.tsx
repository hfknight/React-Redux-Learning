import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContactUsForm } from './components/ContactUsForm';
import './index.css';

ReactDOM.render(
  <ContactUsForm />,
  // <Hello name="Typescript" enthusiasmLevel={6} />,
  document.getElementById('root') as HTMLElement
);
