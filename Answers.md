1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map(), Array.filter(), Array.concat(), are used to avoid producing side-effects. 
Object.create() can be used to create a new object using an existing object's properies. 


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions send payloads of information from application components to the store. 
Reducers specify how the application state will change based on the Actions sent to the store. 
Store is the object holding the application's state 'tree'. 
The store contains all of the application state, and all of the data an application needs to sustain itself. It produces a copy of the state tree when changes are made but always maintains the original state data. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable and clones the state object before returning a modified copy of state where as Component state can be mutated and changed/overwritten. 

1.  What is middleware?
This give Redux the ability to run asynchronously while it manages the data being passed from action creators to reducers. This creates an intercept point to allow the middleware to determine what type of data and how to output the code properly. Since Redux flow is synchronous by nature, middleware is applied when we need to extend the functionality of our data handling to allow multiple processes running simultaneously. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Middleware, this intercepts what is returned from our action-creator. This allows us to us the thunk as a function that returns a function, or simply pass the action on from the action-creator to the reducer. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect();
