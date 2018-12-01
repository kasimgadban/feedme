import fs from 'fs'; 

export default {
    query,
    getById,
    getEventsCities
}

 var events = _createEvents();
// [{"id":1,"cityId":2,"date":"8/4/2020","time":"8:07 AM","address":"806 Golf Course Circle","cookId":3,"description":"deliver transparent web services","price":3,"image":"https://robohash.org/atquecumqueet.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":2,"cityId":3,"date":"1/6/2020","time":"4:28 PM","address":"23 Cordelia Junction","cookId":3,"description":"seize strategic networks","price":5,"image":"https://robohash.org/ullamnecessitatibusmollitia.png?size=50x50&set=set1","menu":" '{menu of food}'"},
// {"id":3,"cityId":4,"date":"6/1/2019","time":"10:40 AM","address":"96174 Harbort Circle","cookId":3,"description":"implement holistic paradigms","price":4,"image":"https://robohash.org/quasexvel.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":4,"cityId":2,"date":"6/26/2019","time":"5:20 AM","address":"52 Jana Crossing","cookId":4,"description":"grow B2C e-markets","price":3,"image":"https://robohash.org/solutaodioet.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":5,"cityId":3,"date":"12/11/2019","time":"10:40 PM","address":"7101 Texas Point","cookId":4,"description":"innovate global communities","price":3,"image":"https://robohash.org/dolorecumquead.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":6,"cityId":2,"date":"11/27/2019","time":"11:35 PM","address":"294 Burning Wood Crossing","cookId":4,"description":"deliver dot-com systems","price":4,"image":"https://robohash.org/repellatseddicta.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":7,"cityId":5,"date":"12/29/2020","time":"12:25 AM","address":"4 Harper Terrace","cookId":2,"description":"target enterprise mindshare","price":4,"image":"https://robohash.org/autrerumeveniet.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":8,"cityId":2,"date":"1/10/2020","time":"10:22 AM","address":"8 Pine View Trail","cookId":2,"description":"deploy clicks-and-mortar supply-chains","price":3,"image":"https://robohash.org/hicquiiusto.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":9,"cityId":3,"date":"7/21/2020","time":"12:02 AM","address":"260 Laurel Center","cookId":1,"description":"orchestrate web-enabled deliverables","price":3,"image":"https://robohash.org/earumquiullam.png?size=50x50&set=set1","menu":"'{menu of food}'"},
// {"id":10,"cityId":7,"date":"2/16/2021","time":"7:52 AM","address":"87200 Bluejay Hill","cookId":1,"description":"harness frictionless infomediaries","price":3,"image":"https://robohash.org/voluptatemnecessitatibusveritatis.png?size=50x50&set=set1","menu":"'{menu of food}'"}];

function query() {
    return Promise.resolve(events);
}

function getById(id) {
    var event = events.find(event => event.id === id);
    if (event)  return Promise.resolve(event);
    else return Promise.reject('Unknown Event by tamara');
}

function getEventsCities(){
    var cities = []
   
    const cities = [...(new Set(events.map(({ cityId }) => cityId)))];
    // console.log('events cities : ',cities);

    return cities
    
}
// getCities()

function _createEvents() {

    var events = require('../../data/event.json')
    // console.log('events line 24',events);
    
    if (events && events.length) return events;
}
