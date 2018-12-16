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
      console.log('events',events);
      
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
    saveImage(context, imageToSave){
      console.log('imageToSave',imageToSave);
      return eventService.saveImage(imageToSave)
      // .then(url=>url)
    },
  loadByFilter(context,{filter}){
  console.log('event moudle filter ',filter);
  return eventService.query({byAddress: filter.byAddress}).then(events =>{
    console.log(events);
    
    context.commit({type: 'setEvents',events});
  });
},
    editEvent(context,{event}){
      // console.log('cook module {} ',{cook})
      console.log('event module event edit ',event)

      return eventService.saveEvent(event)
          .then(event => {
              context.commit({type: 'setEvent', event})
              console.log('the new event isssss edit:',event)
              return event
      })
  },
  removeEvent(context,{event}){
    console.log('event module event edit ',event)

    return eventService.deleteEvent(event)
        // .then( events => {
        //   commit({type: 'setEvents', events})
        // })
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
