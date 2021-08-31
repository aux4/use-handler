# use-handler
React hook to handle events dispatched by [@aux4/dispatcher.js](https://www.npmjs.com/package/@aux4/dispatcher.js).

## Install

```bash
npm install @aux4/use-handler
```

## Usage
The `useHandler` hook registers the specified events to the [Dispatcher.js](https://www.npmjs.com/package/@aux4/dispatcher.js),
and unregister all the events for the subscriber when the react component is unmounted. 

### Using event type and value

```javascript
Dispatcher.dispatch(Events.EVENT_ONE, "ok");
...
useHandler((eventType, value) => {
  /*
   * eventType = Events.EVENT_ONE
   * value = "ok"
   */
  ...
}, Events.EVENT_ONE);
```

### Using event type only

```javascript
Dispatcher.dispatch(Events.EVENT_ONE);
...
useHandler((eventType) => {
  /*
   * eventType = Events.EVENT_ONE
   */
  ...
}, Events.EVENT_ONE);
```

### Using event only

```javascript
Dispatcher.dispatch(Events.EVENT_ONE);
...
useHandler(() => {
  ...
}, Events.EVENT_ONE);
```

### Using multiple events

```javascript
Dispatcher.dispatch(Events.EVENT_ONE, "one");
Dispatcher.dispatch(Events.EVENT_TWO, "two");
...
useHandler((eventType, value) => {
  if (eventType === Events.EVENT_ONE) {
      /*
       * eventType = Events.EVENT_ONE
       * value = "one"
       */
    ...
  } else if (eventType === Events.EVENT_TWO) {
    /*
     * eventType = Events.EVENT_TWO
     * value = "two"
     */
    ...  
  }
  ...
}, [Events.EVENT_ONE, Events.EVENT_TWO]);
```