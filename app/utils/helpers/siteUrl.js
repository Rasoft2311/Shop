function getSiteUrl(req) {
  console.log(req.protocol, req.get('host'), req.originalUrl);
  return req.protocol + '://' + req.get('host');
}

module.exports = getSiteUrl;