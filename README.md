# Zebra demo project

This project uses Next.js as the frontend and Neos as (kind of headless) CMS.

## Development setup

```sh
# Copy env file
cp neos/.env.dist neos/.env

# Install dependencies
yarn install

# Start development server
yarn dev

# While the dev server is running, setup the database schema and import the zebra demo site
yarn setup

# Create a new admin user
./neos/flow user:create --roles Administrator admin password Armin Admin
```

Frontend: http://localhost:3000
Backend: http://localhost:3000/neos
