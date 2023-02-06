import ApiFetch from "./fetch";
import { makeMarkup } from "./markup";

const newClass = new ApiFetch();


async function createEvent() {
    const eventData = await newClass.fetchData();
    const markup = makeMarkup(eventData)
    // console.log(eventData)
}

createEvent();