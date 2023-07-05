'use strict'

const ReactElement = React.createElement('div', {class: "Parent"},[
    React.createElement('div', {class: "child"},[
        React.createElement('h1', {id: "heading"}, "Hello World from react"),
        React.createElement('h2', {id: "subHeading"}, "Welcome to react")
    ]
    ),
    React.createElement('div', {class: "child2"},[
        React.createElement('h1', {id: "heading"}, "Hello World from react"),
        React.createElement('h2', {id: "subHeading"}, "Welcome to react")
]
)
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(ReactElement);