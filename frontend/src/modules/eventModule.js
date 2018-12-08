import eventService from '../services/eventService.js';

export default {
  state: {
    // event: ,
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
    setFilterByEventDate(state,{FilterdEvent}){
      state.FilterdEvent = FilterdEvent;
    }
  },

  actions: {
    loadEvents(context) {
      // if(filter['cityId'] !== '') filter.cityId = filter['cityId'];
      // if(filter['cookId'] !== '') filter.cookId = filter['cookId']
      // console.log('actions of events filter object',filter);
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
    FilterByEventDate(context,{date}){
      console.log(typeof(date));
      return eventService.query({date}).then(FilterdEvent =>{
        context.commit({type:'setFilterByEventDate',FilterdEvent});
        return FilterdEvent;
      })
    }
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
