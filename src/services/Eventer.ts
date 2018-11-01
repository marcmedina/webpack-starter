import Events from "events";

const Eventer: Events = (() => {
  return new Events();
})();

export default Eventer;
