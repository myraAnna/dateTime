import * as React from 'react';
import { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import useMediaQuery from '@mui/material/useMediaQuery';

import dayjs from 'dayjs';

import { Button } from '@mui/material';
import { Container, CustomBox } from './DateTimeSelectorStyles';
import DateTable from '../DateTable/DateTable';

const DateTimeSelector = () => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    const [dateFrom, setDateFrom] = useState(dayjs());
    const [dateTo, setDateTo] = useState(dayjs());
    const [dates, setDates] = useState([]);

    const handleDateFromChange = (newDate) => {
        setDateFrom(newDate);
    };

    const handleDateToChange = (newDate) => {
        setDateTo(newDate);
    };

    const handleSubmit = () => {
        if (dayjs(dateFrom).isAfter(dayjs(dateTo))) {
          alert('The "To" date must be after the "From" date.');
          return;
        }
    
        const dateArray = [];
        let currentDate = dayjs(dateFrom);
    
        while (currentDate <= dayjs(dateTo)) {
          dateArray.push(currentDate.toDate());
          currentDate = currentDate.add(1, 'day');
        }
    
        setDates(dateArray);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <h2>Select Dates</h2>
            <p>Select a date range to see the odd/even status of each date.</p>

            <Container>
                {isDesktop ? (
                    <>
                        <CustomBox>
                            <StaticDateTimePicker
                                label="Date from:"
                                value={dateFrom}
                                onChange={handleDateFromChange}
                                orientation="landscape"
                        />
                        </CustomBox>
                        <CustomBox>
                            <StaticDateTimePicker
                                label="Date to:"
                                value={dateTo}
                                onChange={handleDateToChange}
                                orientation="landscape"
                            />
                        </CustomBox>
                    </>
                ) : (
                    <>
                        <CustomBox>
                            <StaticDateTimePicker
                                label="Date from:"
                                value={dateFrom}
                                onChange={handleDateFromChange}
                            />
                        </CustomBox>
                        <CustomBox>
                            <StaticDateTimePicker
                                label="Date to:"
                                value={dateTo}
                                onChange={handleDateToChange}
                            />
                        </CustomBox>
                    </>
                )}
            </Container>

            <Button variant="contained" onClick={handleSubmit}>Go</Button>

            <DateTable dates={dates}/>

        </LocalizationProvider>
    );
};

export default DateTimeSelector;