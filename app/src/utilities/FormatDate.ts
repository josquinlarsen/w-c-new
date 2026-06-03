export const formatDate = (date: Date) : string => {
    const formatted = new Intl.DateTimeFormat('en-US', {
        year:'numeric',
        month: '2-digit',
        day:'2-digit',
    });
    return formatted.format(date).replace(/\//g, '-');
}