## Step 1

Create a file names `.env` in the root directory with three variables.

`MONGO_URI`

`JWT_SECRET`

`JWT_LIFETIME`

which you can get from mongodb, [allkeysgenerator](https://www.allkeysgenerator.com/), [JWT document](https://www.npmjs.com/package/jsonwebtoken)

## Step 2

Run this command below:

```bash
npm install && npm start
```

Or if you prefer nodemon, you can run this command instead:
```bash
npm install && npm run dev
```

If you see `Server listening on port 3000` in your cli, if you are all set.