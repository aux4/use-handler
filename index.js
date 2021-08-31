const { useEffect } = require("react");
const { Dispatcher } = require("@aux4/dispatcher.js");

function useHandler(handler, event) {
  useEffect(() => {
    Dispatcher.register(handler, event);

    return () => {
      Dispatcher.unregister(handler);
    };
  }, [handler, event]);
}

module.exports = {
  useHandler
};
