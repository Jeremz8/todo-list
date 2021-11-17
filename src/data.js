export const DUMMY_TODO = [
    {
      id: "t1",
      text: "Chose à faire 1",
    },
    {
      id: "t2",
      text: "Chose à faire 2",
    },
  ];
// function getTodoData(url) {
//   fetch("https://cat-todo-list.herokuapp.com/todos")
//   .then(response => response.json())
//   .then(data => {
//     const todoList = data.map(item => {
//               const container = {};
//               container.id = item.id;
//               container.text = item.content;
//               return container;
//           });
//     console.log(todoList);
//     return todoList;
//   });
// }
//export const DUMMY_TODO = getTodoData("https://cat-todo-list.herokuapp.com/todos");


// return (
//   fetch("https://cat-todo-list.herokuapp.com/todos")
//   .then(response => console.log(response.json()))
//   .then(data => {alert(data['result']['XXBTZEUR']['a'][0])})
//   )