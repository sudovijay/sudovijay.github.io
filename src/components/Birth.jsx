import React from "react";

import start_of_minute from "date-fns/start_of_minute";
import differenceInYears from "date-fns/difference_in_years";
import differenceInMonths from "date-fns/difference_in_months";
import differenceInDays from "date-fns/difference_in_days";
import differenceInSeconds from "date-fns/difference_in_seconds";
import subYears from "date-fns/sub_years";
import subMonths from "date-fns/sub_months";
import subDays from "date-fns/sub_days";

class Birth extends React.Component {
    state = {
        seconds: 0,
    };

    componentDidMount() {
        const obj = this.getBirthDate();

        setTimeout(() => {
            this.setState({ seconds: obj.seconds });
        });

        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getBirthDate = () => {
        const time_born = start_of_minute(new Date("1995-04-16 23:30"));

        const years = differenceInYears(new Date(), time_born);

        const months = differenceInMonths(
            subYears(new Date(), years),
            time_born,
        );

        const days = differenceInDays(
            subMonths(subYears(new Date(), years), months),
            time_born,
        );

        const seconds = differenceInSeconds(
            subDays(subMonths(subYears(new Date(), years), months), days),
            time_born,
        );

        return { years, months, days, seconds };
    };

    render() {
        const obj = this.getBirthDate();

        return (
            <React.Fragment>
                {"I'm"} {obj.years} Years, {obj.months} Months, {obj.days} Days
                And<em>{this.state.seconds}</em>Seconds Old
            </React.Fragment>
        );
    }
}

export default Birth;
