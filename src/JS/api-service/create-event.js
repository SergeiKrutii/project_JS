import ApiFetch from "./fetch";
import { eventSettings } from "./markup";

const newClass = new ApiFetch();


async function createEvent() {
    const eventData = await newClass.fetchData();
    const markup = eventSettings(eventData);
    // console.log(eventData)
}

