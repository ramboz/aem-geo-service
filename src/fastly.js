function getOffset(offset) {
  const hours = Math.floor(offset / 100);
  const minutes = offset % 100;
  console.log(offset, hours, minutes);
  return hours * 60 + minutes;
}

module.exports = function getGeoData(event) {
  const  { geo } = event.client;
  return {
    as_name: geo.as_name,
    as_number: geo.as_number,
    city: geo.city,
    continent: geo.continent,
    country_code: geo.country_code,
    latitude: geo.latitude,
    longitude: geo.longitude,
    postal_code: geo.postal_code,
    region: geo.region,
    utc_offset: getOffset(geo.utc_offset),
  }
}
