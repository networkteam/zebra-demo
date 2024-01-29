# Zebra demo project

This project uses Next.js as the frontend and Neos as (kind of headless) CMS.

## Development setup

### Using Devbox

Install Devbox if you haven't already:

https://www.jetpack.io/devbox/docs/installing_devbox/

Start all services:

```sh
devbox services up
```

This will create the database and import the site.

Create a backend user:

```sh
# Create a new admin user
./neos/flow user:create --roles Administrator admin password Zed Zebra
```

Frontend: http://localhost:3000
Backend: http://localhost:3000/neos

> Note: The frontend and backend are accessed through Next.js.
