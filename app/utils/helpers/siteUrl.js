function getSiteUrl(req, withOriginalUrl) {
  return `${req.protocol}://${req.get('host')}${withOriginalUrl ? req.originalUrl : ''}`;
}

module.exports = getSiteUrl;