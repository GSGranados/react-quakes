const quakeReducer = (quake) => {
    const date = new Date(quake.properties.time);
    const year = date.getFullYear();
    const month = monthName(date.getMonth());
    const day = date.getDate();
    const hour = date.getHours();
    const minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const datestring = `${month} ${day}, ${year} at ${hour}:${minute}`;

    function monthName(index) {
      const monthLegend = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };
      return monthLegend[index];
    }
    return datestring;
  };

  export default quakeReducer;