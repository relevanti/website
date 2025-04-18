import "./EventItem.css";
import * as React from "react";
interface Event {
    status: string;
    title: string;
    description: string;
    regularity: string;
}
interface EventItemProps {
    event: Event;
    statusClass: string;
}
declare const EventItem: React.FC<EventItemProps>;
export default EventItem;
