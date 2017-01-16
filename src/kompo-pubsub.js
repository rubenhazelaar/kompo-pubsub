export default function() {
    // Store for the topics
    const  topics = {};

    /**
     * Subscribe to a topic
     * @param  { string } topic - Name of the topic to subscribe to
     * @param  { function } listener - Callback to be run when the topic is published
     * @returns { function } listener
     */
    function subscribe(topic, listener) {
        // Create the topic's object if not yet created
        if (!topics[topic]) {
            topics[topic] = []
        }

        // Add the listener to queue
        topics[topic].push(listener);

        return listener
    }

    /**
     * Publish a topic
     * @param  { string } topic - Name of the topic to be published
     * @param  { Object } data - Object containing any additional information you want available to the subscribe function
     */
    function publish(topic, data) {
        // If the topic doesn't exist, or there's no listeners in queue, just leave
        const t = topics[topic];
        if (!topics[topic] || !t.length) {
            return
        }

        // Cycle through topics queue and call the function!
        for (let i = 0, l = t.length; i < l; ++i) {
            t[i](data);
        }
    }

    /**
     * Removes a topic or a listener from a topic
     * @param { string } topic - Name of the topic to subscribe to
     * @param { function } listener - Callback to be run when the topic is published
     */
    function remove(topic, listener) {
        // Remove entire topic if listener is not provided
        if(!listener) {
            delete topics[topic];
            return
        }

        const t = topics[topic],
            index = t.indexOf(listener);
        if (index > -1) {
            t.splice(index, 1)
        }
    }
    
    return {
        subscribe,
        publish,
        remove
    }
}
