const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const { SHIM_HOST, SHIM_PORT } = process.env;

app.listen(SHIM_PORT, SHIM_HOST, () => {
  console.log(`shim server is running on ${SHIM_PORT}`);
});
