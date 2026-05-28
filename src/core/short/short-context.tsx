import { createContext, type ActionDispatch } from 'react';

export const ShortContext = createContext('');
export const ShortDispatchContext = createContext<ActionDispatch<[action: any]> | null>(null);
