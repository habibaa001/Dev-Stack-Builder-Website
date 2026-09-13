Dev Stack Builder

Dev Stack provides an interactive platform for discovering frontend, backend, database, and development tools. It allows users to create and manage a custom technology stack through a clean and responsive user interface.

Technologies used:
-React.js
-Tailwind CSS
-DaisyUI
-TypeScript  
-JavaScript (ES6)
-React-Toastify (NPM Package)
-JSON (for technology data)
-Vite (build tool)

3 Main Features of Dev Stack Builder
    1. Technology Selection
    2. Stack Management
    3. Dynamic Data Loading


<b>i. What is JSX, and why is it used in React?</b>

JSX is an extension to javascript syntax.It serves as a user-friendly abstraction that makes React code significantly easier to read, write, and maintain. 

<b>ii. What is the difference between props and state?</b>

Props are used to pass data from a parent component to a child component.
State is local to the component and cannot be accessed by child components unless passed down as props.

<b>iii. What does the useState hook do, and where did you use it in this project?</b>

useState stores data that can change in a React component.
I used it in App to store the selected technologies/stack and the technology data.

<b> iv. What does the useEffect hook do, and why did you need it to load the JSON data?</b>

useEffect runs code when a component loads or changes.
I used it to fetch the technologies.json file when the website loads.

<b>v. Why does every item in a .map() list need a unique key prop?</b>

The key helps React identify each item uniquely and efficiently update the list when something changes.

<b>vi. What is conditional rendering? Show one place you used it.</b>

Conditional rendering means showing something only when a condition is true.
For example, showing a message when the stack is empty:
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}

<b>vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?</b>

The parent sends data to the child using props. The child can send information back by calling a function passed through props.