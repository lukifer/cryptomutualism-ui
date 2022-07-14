#/bin/zsh
source .env
gql=$(cat query.graphql | tr '\n' ' ')
# echo "prod:$PROD_STRAPI_TOKEN"

curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $PROD_STRAPI_TOKEN" \
-d "{\"query\": \"$gql\"}" \
http://cryptomutualism.org:1337/graphql | jq '.data' > src/content/content.json

quicktype src/content/content.json -o src/types.ts
