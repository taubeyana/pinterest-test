export const DISPLAY_HEADER = 'DISPLAY_HEADER';

export const displayHeader = (payload) => {
    return  {
        type: DISPLAY_HEADER,
        payload
    }
}