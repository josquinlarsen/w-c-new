interface DateProps { date: string; }

const FormatDate = ({ date }: DateProps) => {
    const dateFormatted = (inputDate: string) => {
        return new Date(inputDate).toLocaleDateString("en-US", {  
            day:'2-digit', 
            month: 'short', 
            year:'numeric' } 
        );
    }
    return dateFormatted(date);
    // const formatted = new Intl.DateTimeFormat('en-US', {
    //     year:'numeric',
    //     month: '2-digit',
    //     day:'2-digit',
    // });
    // return formatted.format(date).replace(/\//g, '-')</span>;
};

export default FormatDate;