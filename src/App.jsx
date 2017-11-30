const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter.</div>
        )
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        return (
            <table className="bordered-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>{issueRows}</tbody>
            </table>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for an Issue Add entry form.</div>
        )
    }
}

const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel',
    },
];

class IssueList extends React.Component {
    constructor(){
        super();
        //Intializing the state
        this.state = { issues: issues };
        //After 2000 milliseconds the constructor is called this.createIssue will be called
        //Had to include a bind(this) on the function instead of passing it as it
        //if we don't do this the THIS variable will be set to the event that called the function
        setTimeout(this.createTestIssue.bind(this), 2000);
    }

    createIssue(newIssue){
        //Made a copy of the issues array in the state by calling slice() on it
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        //Pushed the new issue to be created into the array
        //Made a copy of the state value issues because you are not
        //supposed to modify the state directly
        newIssues.push(newIssue);
        //Called this.setState with the new array thus modifying the state of the component
        this.setState({ issues: newIssues });
    }

    createTestIssue(){
        this.createIssue({
            status: 'New', owner: 'Pieta', created: new Date(),
            title: 'Completion date should be optional',
        });
    }

    render(){
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <!--  Passed the data contained in the state to the IssueTable Via properties
                the initial rendering of the IssueTable component will not use this array as
                its source data -->
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);