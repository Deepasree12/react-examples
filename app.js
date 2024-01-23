const heading= React.createElement('div',{id:'parent'},[
  React.createElement('div',{id:'child1'},[
    React.createElement('h1',{},"hii"),
    React.createElement('h2',{},"world"),
  ]),
  React.createElement('div',{id:'child2'},[
    React.createElement('h1',{},"hello"),
    React.createElement('h2',{},"worlds"),
  ]),
]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);                   