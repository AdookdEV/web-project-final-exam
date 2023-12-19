export const createAlertMessage = (message, isError) => {
    return {
        id: Date.now(),
        content: message,
        isError: isError
    }
};

