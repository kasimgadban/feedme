import eventService from '../services/eventService.js';

export default {
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
    setFilterByEventDate(state,{FilterdEvent}){
      state.FilterdEvent = FilterdEvent;
    }
  },

  actions: {
    loadEvents(context) {
      // if(filter['cityId'] !== '') filter.cityId = filter['cityId'];
      // if(filter['cookId'] !== '') filter.cookId = filter['cookId']
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
    loadByFilter(context,{filter}){
      console.log('event moudle filter ',filter);
      return eventService.query({byAddress: filter.byAddress}).then(events =>{
        context.commit({type: 'setEvents',events});
      });
    }
    // // [date,address]
    // // {date,address}
    // FilterByEventDate(context,{date}){
    //   console.log(date);
      
    //   return eventService.query({date}).then(FilterdEvent =>{
    //     context.commit({type:'setFilterByEventDate',FilterdEvent});
    //     console.log('back from server',FilterdEvent);
    //     return FilterdEvent;
    //   })
    // }
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
