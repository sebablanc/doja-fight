import { createContext, type ActionDispatch } from 'react';

export const TalleContext = createContext('S');
export const TalleDispatchContext = createContext<ActionDispatch<[action: any]> | null>(null);
