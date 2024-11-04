export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b55e8c4cc5msh8e8d001581d9e95p1c662cjsnb35a6927be24",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, theoptions) => {
  try {
    const response = await fetch(url, theoptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
