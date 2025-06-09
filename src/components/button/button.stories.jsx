import React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: {
    children: 'Click me',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    style: { fontSize: '1.5em' },
  },
}; 