source "https://rubygems.org"

# Jekyll core — pinned to 4.3.x for broader Ruby compatibility (macOS users
# with Ruby <= 3.3 hit native-compile errors on Jekyll 4.4 because of the
# sass-embedded → google-protobuf 4 → bigdecimal 4.1 chain).
gem "jekyll", "~> 4.3.0"

# Force the legacy sass converter (uses sassc, not sass-embedded) → no
# bigdecimal/protobuf native compilation pain.
gem "jekyll-sass-converter", "~> 2.2"

# WEBrick is no longer bundled with Ruby >= 3.0
gem "webrick", "~> 1.8"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed",     "~> 0.17"
  gem "jekyll-sitemap",  "~> 1.4"
  gem "jekyll-seo-tag",  "~> 2.8"
end

# Required by Ruby 3.4+ (innocui se la versione è precedente)
gem "csv"
gem "base64"
gem "logger"
