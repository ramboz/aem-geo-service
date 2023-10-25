addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

const getOffset = (fastlyOffset) => {
  const hours = Math.floor(fastlyOffset / 100);
  const minutes = fastlyOffset % 100;
  console.log(fastlyOffset, hours, minutes);
  return hours * 60 + minutes;
}

async function handleRequest(event) {
  const geoData = event.client.geo;
  const body = JSON.stringify({
    as_name: geoData.as_name,
    as_number: geoData.as_number,
    city: geoData.city,
    continent: geoData.continent,
    country_code: geoData.country_code,
    latitude: geoData.latitude,
    longitude: geoData.longitude,
    postal_code: geoData.postal_code,
    region: geoData.region,
    utc_offset: getOffset(geoData.utc_offset),
  });

  return new Response(body, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    status: 200
  });
}
