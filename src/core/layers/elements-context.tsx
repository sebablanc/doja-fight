import { createContext, type ActionDispatch } from 'react';

export const ElementsContext = createContext([]);
export const ElementsDispatchContext = createContext<ActionDispatch<[action: any]> | null>(null);
