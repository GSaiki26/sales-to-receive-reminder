# Basics
FROM node:19.2-alpine
WORKDIR /app

# Update the container
RUN apk upgrade --update --no-cache
RUN apk add --no-cache chromium chromium-chromedriver

# Configure the user
RUN chown -R node /app
USER node

# Install the dependencies
COPY --chown=node ./package.json .
RUN yarn install --production

# Copy the project
COPY --chown=node ./tsconfig.json .
COPY --chown=node ./src ./src

# Run the project
CMD yarn run start:prod
