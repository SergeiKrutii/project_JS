function makeMarkup({ _embedded: { events } }) {
  console.log(events);
    const normalizedData = events.map(
      ({
        name,
        dates: {
          start: { localDate },
        },
      }) => {
        console.log('');
      }
    );
}

export { makeMarkup };
