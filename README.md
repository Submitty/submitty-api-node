# submitty-api-node

A node.js client for interacting with the Submitty API

Please see the [API Docs](https://api.submitty.org) for more information.

## Developing

```shell
git clone https://github.com/Submitty/submitty-api-node
cd submitty-api-node
npm install
npm run build
```

## Usage

```javascript
const SubmittyApi = require('./dist');
const client = new SubmittApi('http://192.168.56.111');
client.token.get('instructor', 'instructor').then(() => {
    client.courses.get().then((courses) => {
        console.log(JSON.stringify(courses, null, 2));
    });
})
```
