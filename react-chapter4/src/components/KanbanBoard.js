import React from 'react';
import List from './List';


class KanbanBoard extends React.Component {
    render() {
        return (
            <div className="app">
                <List
                    id="todo"
                    title="To Do"
                    taskCallbacks={this.props.taskCallbacks}
                    cards={
                        this.props.cards.filter((card) => card.status === "todo")
                    }
                />

                <List
                    id="in-progress"
                    title="In Progress"
                    taskCallbacks={this.props.taskCallbacks}
                    cards={
                        this.props.cards.filter((card) => card.status === "in-progress")
                    }
                />

                <List
                    id="done"
                    title="Done"
                    taskCallbacks={this.props.taskCallbacks}
                    cards={
                        this.props.cards.filter((card) => card.status === "done")
                    }
                />
            </div>
        )
    }
}

KanbanBoard.propTypes = {
    cards: React.PropTypes.arrayOf(React.PropTypes.object),
    taskCallbacks: React.PropTypes.object
};

export default KanbanBoard;