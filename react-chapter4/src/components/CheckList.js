import React from 'react';


class CheckList extends React.Component {
    checkInputKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }

    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist_task">
                <input type="checkbox"
                       checked={task.done}
                       onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
                />
                {task.name}{' '}
                <a href="#"
                   className="checklist_task--remove"
                   onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}
                />
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type then hit Enter to add a task"
                       onKeyPress={this.checkInputKeyPress.bind(this)}
                />
            </div>
        )
    }
}

CheckList.propTypes = {
    cardId: React.PropTypes.number,
    taskCallbacks: React.PropTypes.object,
    tasks: React.PropTypes.arrayOf(React.PropTypes.object)
};


export default CheckList;
