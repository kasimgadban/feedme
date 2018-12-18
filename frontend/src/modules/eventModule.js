import eventService from '../services/eventService.js';

export default {
  strict: false,
  state: {
    event: null ,
    events: null,
    currEvent: loadEvent(),
    FilterdEvent: null
  },
  mutations: {
    setEvents(state, { events }) {
      state.events = events;
    },
    setEvent(state, { event }) {
      state.currEvent = event;
    },
    setEventsByFilter(state,{FilterdEvent}){
      state.FilterdEvent = FilterdEvent;
    }
  },

  actions: {
    loadEvents(context) {
      return eventService.query().then(events => {
        context.commit({ type: 'setEvents', events });
      });
    },
    loadEvent(context,{event}){
      return eventService.getById(event._id).then(event => {
        context.commit({ type: 'setEvent', event });
      });
    },
    getById(context, { eventId }) {
      return eventService.getById(eventId).then(event => {
        context.commit({ type: 'setEvent', event });
        return event;
      });
    },
    saveImage(context, imageToSave){
      return eventService.saveImage(imageToSave)
    },
  loadByFilter(context,{filter}){
  return eventService.query({byAddress: filter.byAddress}).then(events =>{
    
    context.commit({type: 'setEvents',events});
  });
},
    editEvent(context,{event}){
      return eventService.saveEvent(event)
          .then(event => {
              context.commit({type: 'setEvent', event})
              return event
      })
  },
  removeEvent(context,{event}){
    return eventService.deleteEvent(event)
   },
  },
  getters: {
    getEvents: state => {
      return state.events;
    },
    getEventById: state => {
      return state.eventId;
    },
    getEvent: state =>{
      return state.event;
    }
  }
};


function loadEvent() {
    return {
      address: '',
      date: '',
      time: '',
      description: '',
      price: 0,
      image: '',
      menu: [
        {
          name: '',
          desc: '',
        }],
      bgImage: '',
      dates: [
        {
          guestsCount: 0,
          count: 0,
          eventDate: '',
          guests: [
            {
              guestName: '',
              guestPhone: ''
            }
          ],
          guestsBooking: 0
        }
      ],
      maxGuests: 0,
      guestsCount: 0
    }
}
