import React from "react";
import './Navigation.css';
import { IconChevronLeft, IconCalendarMonth, IconChevronRight } from '@tabler/icons-react';

const Navigation = ({date}: {date: string}) => {
  return (
    <section className="Navigation">
        <button className="nav__button nav__button_type_prev">
            <IconChevronLeft width="30" height="30" />
        </button>
        <button className="nav__button nav__button_type_date">
            <IconCalendarMonth width="45" height="45" />
            <p className="nav__date">{date}</p>
        </button>
        <button className="nav__button nav__button_type_next">
            <IconChevronRight width="30" height="30" />
        </button>
    </section>
  )
};

export default Navigation;
