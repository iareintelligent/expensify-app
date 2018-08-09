import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate
                ? startDate.isSameOrBefore(createdAtMoment, "day")
                : true;
            const endDateMatch = endDate
                ? endDate.isSameOrAfter(createdAtMoment, "day")
                : true;
            // const textMatch = expense.toLowerCase().includes(text) ? text : false;
            const textMatch = expense.description.toLowerCase().includes(text);

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "amount":
                    return b.amount - a.amount;
                case "date":
                    return a.createdAt - b.createdAt;
            }
        });
};
