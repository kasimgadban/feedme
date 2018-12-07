import eventService from "../services/eventService.js";

export default {
  state: {
    events: null,
    currEvent: null
  },
  mutations: {
    setEvents(state, { events }) {
      state.events = events;
    },
    setEvent(state, { event }) {
      state.currEvent = event;
    }
  },

  actions: {
    loadEvents(context) {
      // if(filter['cityId'] !== '') filter.cityId = filter['cityId'];
      // if(filter['cookId'] !== '') filter.cookId = filter['cookId']
      // console.log('actions of events filter object',filter);

      return eventService.query().then(events => {
        context.commit({ type: "setEvents", events });
      });
    },
    // loadEvent(context){
    //   return eventService.query().then(events => {
    //     context.commit({ type: "setEvents", events });
    // },
    getById(context, { eventId }) {
      console.log("I was called as an event module");

      return eventService.getById(eventId).then(event => {
        context.commit({ type: "setEvent", event });
        return event;
      });
    }
  },
  getters: {
    getEvents: state => {
      return state.events;
    },
    getEventById: state => {
      return state.eventId;
    }
  }
};
