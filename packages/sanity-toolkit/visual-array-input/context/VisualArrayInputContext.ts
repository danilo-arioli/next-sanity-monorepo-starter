import { createContext } from 'react';
import type { UserOnItemAddFn } from '../types';

export interface VisualArrayInputContextProps {
  openVisualArrayInput: UserOnItemAddFn;
}

export const VisualArrayInputContext = createContext<VisualArrayInputContextProps>({
  openVisualArrayInput: () => {
    console.warn(
      'openVisualArrayInput not implemented in this context—must be defined when initialised',
    );
  },
});
