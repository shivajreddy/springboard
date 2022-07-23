### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?  
  To handle CSR (Client Side Routing)

- What is a single page application?  
  A web application, with just a single page(Usually Homepage) or one end-point, and no routing functionality to navigate to different end points.

- What are some differences between client side and server side routing?

  - Client Side Routing entirely happens on the client(Desktop, mobile, iPad..) there no server calls to navigate to different end-points in the application. But using History API and Routing API, the user's can still have go back and forth, and bookmark endpoints. Biggest Pro for CSR is very less server dependency, applications with huge user base can benifit from this.
  - Server Side Routing, refers to routing handled by the server. When the client makes a GET request at an endpoint in the application, the Server handles that request/response

- What are two ways of handling redirects with React Router? When would you use each?

  1.  Using Navigate component to navigate to a path. useNavigate hook to redirect after an event fires up.
  2.  Other way is to use **.push** method on the **history** object.

- What are two different ways to handle page-not-found user experiences using React Router?

  1.  use `<Route to="*" element={<SomeComponent />}><Route/>` the \* (star) in the **to** prop
  2.  use `<Route><NotFound /></Route>` method

- How do you grab URL parameters from within a component using React Router?  
  we can use **useParams** hook to get the URL parameters. **useLocation** hook will give the entire location at the URL bar.

- What is context in React? When would you use it?  
  context is the solution to avoid prop drilling. A situation where you would want to pass down props in the component tree. To avoid this, we can use React's context to store a piece of context, and use it down the component tree.

  1.  Create context using React.createContext(), export the output as a Component
  2.  Create a Provider and wrap the parent component with this contexts provider, with a Value prop. All the child components that might need this context should be inside this provider.
  3.  In the child component's, pass the Context inside the **React.useContext()** and this hook will return the Value prop passed at the Provider level.

- Describe some differences between class-based components and function
  components in React. & - What are some of the problems that hooks were designed to solve?  
  Functional Components(FC) are relatively new in React, and an answer to React's evolution over time, to solve Class based components(CBC). Class based components are found in legacy code bases, and often a choice to design very complex states. Since CBC have special methods -> componentDidMount, componentWillUnmout, componentDidUpdate. But React hooks are a representation of these methods to handle the life cycle of a Component. React hooks also are designed to address a biggest problem in CBC i.e., sharing logic/code across components.
