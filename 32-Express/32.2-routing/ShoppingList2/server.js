const expressApp = require("./app");

const app_port = 2000;

expressApp.listen(app_port, () => {
  return console.log("This app has started successfully");
});
