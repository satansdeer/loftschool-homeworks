export const getPhotos = (apiKey, rover = 'curiosity', solNum = 1) =>
  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/` +
      `${rover}/photos?` +
      `sol=${solNum}&` +
      `api_key=${apiKey}`
  ).then(response =>
    response.status !== 200 ? Promise.reject(response) : response.json()
  );
