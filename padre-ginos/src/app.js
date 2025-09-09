const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "The Selam Pizza"),
    React.createElement("p", {}, "Mozzarella Cheese, Pepperoni"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "padre Gino's")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
