

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What need to be done?
          </label>
        </h2>
        <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" />
        <button type="submit" className="btn btn__primary btn__lg">Add</button>
      </form>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true" >
          <span className="visually-hidden" >Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      <h2 className="list-heading">3 tasks remaining</h2>
      <ul className="todo-list stack-large stack exception" aria-labelledby="list-heading" >
        <li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox" id="todo-0" defaultChecked={true} />
            <label htmlFor="todo-0" className="todo-label">Eat</label>
          </div>
        </li>
      </ul>
      
    </div>
  );
}

export default App;