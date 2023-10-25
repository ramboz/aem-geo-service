function getOffset(timeZone = 'UTC') {
  const date = new Date();
  const fromDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const toDate = new Date(date.toLocaleString('en-US', { timeZone }));
  return (toDate.getTime() - fromDate.getTime()) / 6e4;
}

export default function getGeoData(event) {
  const geo = event.request.cf;
  return {
    as_name: geo.asOrganization,
    as_number: geo.asn,
    city: geo.city,
    continent: geo.continent,
    country_code: geo.country,
    latitude: Number(geo.latitude),
    longitude: Number(geo.longitude),
    postal_code: geo.postalCode,
    region: geo.regionCode,
    utc_offset: getOffset(geo.timezone),
  }
}
