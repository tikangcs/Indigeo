export default (lat, lon, geo) => {
  let latAbs = Math.abs(geo.coords.latitude);
  let lonAbs = Math.abs(geo.coords.longitude);
  let docLatAbs = Math.abs(lat);
  let docLonAbs = Math.abs(lon);

  let latMax = latAbs + 0.005;
  let latMin = latAbs - 0.005;
  let lonMax = lonAbs + 0.005;
  let lonMin = lonAbs - 0.005;
  if (
    latMax >= docLatAbs &&
    docLatAbs >= latMin &&
    lonMax >= docLonAbs &&
    docLonAbs >= lonMin
  ) {
    return true;
  } else {
    return false;
  }
};
