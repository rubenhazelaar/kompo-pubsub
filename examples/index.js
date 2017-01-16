import pubsub from  '../src/kompo-pubsub';

const ps1 = pubsub();

ps1.subscribe("123", ()=> {
    console.log(123);
});

const ps2 = pubsub();

const l = ps2.subscribe("456", (data)=> {
    console.log(456);
    console.log(data);
});

ps1.publish("123");
ps2.publish("456", 789);

// remove listener
ps2.remove("456", l);
ps2.publish("456");
