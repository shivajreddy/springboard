### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  
  React is JS library, created by FB (Mark). It is a declerative library, that relies on JSX. Has a bigg community. Since it's not a framework, it has to rely on tons of dependencies, to get started with it a.k.a Create React App.

- What is Babel?  
  Babel is a JS compiler. It allows backward compatibility. i.e., it ensures that the code it receives runs on the browser it is going to be displayed.
  Babel runs in the browser too. The JSX that React or other libraries/frameworks that ship to the client, gets converted into native HTML element.

- What is JSX?  
  JSX stands for Javascript expression. Its a declerative way of creating and manupilating DOM elements.

```jsx
// Imperative way of create a h1 dom node
const title = React.createElement("h1", {}, "My First React Code");
// Declerative way of create same DOM node using JSX
const title = <h1>My First React Code</h1>;
```

- How is a Component created in React?  
  There are two types of comopnents -> Function based, Class based.
  Both types, return a single DOM node, which can have children in it, but all in one just one element is to be returned. To overcome unnecessary `<div` we can use React fragments ->

```jsx
<>
	{children go here}
</>
```

- What are some difference between state and props?  
  Props are immutable. Props are passed in to a component as arguments, which can be used inside the component/passed further down. State is created with in
  State is mutable. State is how interaactive UI is designed. State can be tracked over the component life-cycle.

- What does "downward data flow" refer to in React?  
  Data flows from Higher level component to its childs, which then pass further down. Higher level components usually define the state, and are passed down as props to its children.
  Example: counter app, with a button (child) component that changes the state in the parent

```jsx
function Button({ buttonAction }) {
  return <button onClick={buttonAction}> Increase </button>;
}

function Parent() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <Button buttonAction={() => setCount((prevCount) => prevCount + 1)} />
    </div>
  );
}
```

- What is a controlled component?  
  The Value of a component(form data) is controlled through state, with in the component. The data is stored inside in the component not in the DOM

- What is an uncontrolled component?  
  Its a traditional HTML form element, the value/data is stored in the DOM.

- What is the purpose of the `key` prop when rendering a list of components?  
  React needs to keep track of items in the state. In the Component life-cycle, especially during re-renders and unmounting of the component, react uses this key to track the exact components that changed, thus helping in accurate referance to those that changed and performance.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?  
  Array variables are reference based, and when the elements in the Array are chagned, React wouldn't exactly know which elements changed. It guesses that new elements are added at the end of the array (thought its right in most of the time), it isn't accurate. Also, if the elements in the array doesnt change, React thinks they changed, and re-renders when using useEffect hook.

- Describe useEffect. What use cases is it used for in React components?  
  useEffect hook is the side effect that runs upon every time the component re-renders. Starting after initial rendering.
  use case of useEffect -> When ever a state changes, if you want to perform some effects based on the state that changed, or just perform an effect after the component renders for the first time.
  Example: 1. When fetching data. Render the component when it mounts. Then depending on the reponses re-render the component with data/error from the fetch request.

- What does useRef do? Does a change to a ref value cause a rerender of a component?  
  useRef hook is a way to track the DOM elements, and the reference to these elements won't change after re-rendering. Change in the ref wont make a component re-render.

- When would you use a ref? When wouldn't you use one?  
  useRef is to be used to track DOM nodes along rerenders of a component. useRef is expensive, so it is to be only used when you want to track DOM elements that tend to be modified along the rerenders. Just using DOM api for tracking elements is to be used, when the element is constatnt across rerenders

- What is a custom hook in React? When would you want to write one?  
  Custom hooks are a great way to group logic (combination of inbuilt hooks) and re-used in other places.
  It is a super powerful way of sharing logic across the project or projects, especially when it involves same logic that is dependant on multiple inbuilt hooks.
  Example: useLocalStorageSync -> to sync state in localStorage using localStorage API, useAxios -> to make axios calls and return responses, and make calls again if the reponse changes.
