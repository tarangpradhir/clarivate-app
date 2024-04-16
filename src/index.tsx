import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {appRouter} from './App';
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={appRouter} />);
