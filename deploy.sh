#!/usr/bin/env bash
#
# Deploy the built portfolio to AWS S3 + CloudFront.
#
# Usage:
#   S3_BUCKET=my-bucket CLOUDFRONT_DISTRIBUTION_ID=E123ABC ./deploy.sh
#
# Or copy deploy.env.example to deploy.env, fill it in, and just run ./deploy.sh
# (deploy.env is gitignored so your bucket/distribution stay out of version control).
#
set -euo pipefail

cd "$(dirname "$0")"

# Load config from deploy.env if present (does not override existing env vars).
if [[ -f deploy.env ]]; then
  # shellcheck disable=SC1091
  set -a; source deploy.env; set +a
fi

: "${S3_BUCKET:?Set S3_BUCKET (e.g. S3_BUCKET=my-portfolio-bucket ./deploy.sh)}"
# CLOUDFRONT_DISTRIBUTION_ID is optional. Leave it empty if the bucket is served
# directly via S3 static website hosting (no CloudFront in front of it).
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

echo "==> Building production bundle"
npm run build

echo "==> Syncing dist/ to s3://${S3_BUCKET}"
aws s3 sync dist/ "s3://${S3_BUCKET}" --delete

if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID}" ]]; then
  echo "==> Invalidating CloudFront cache (${CLOUDFRONT_DISTRIBUTION_ID})"
  aws cloudfront create-invalidation \
    --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*"
  echo "==> Done. Allow a minute or two for the CloudFront invalidation to complete."
else
  echo "==> No CLOUDFRONT_DISTRIBUTION_ID set; skipping invalidation (serving from S3 website endpoint)."
  echo "==> Done."
fi
