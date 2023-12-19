import { createContext } from 'react';

export const AlertMessagesContext = createContext({
    alertMessages: [],
    setAlertMessages: () => {}
});