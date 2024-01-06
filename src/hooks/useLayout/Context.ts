import { createContext, useContext } from 'react';
import { LayoutContextProps } from './types';

export const LayoutContext = createContext({} as LayoutContextProps);

export const useLayout = () => useContext(LayoutContext);
