const contentNode = document.getElementById('contents');

class IssueRow extends React.Component {
    render() {
        <!-- Creates an object describing the style -->
        const borderedStyle = {border: "1px solid silver", padding:4};
        return(
            <tr>
                <!-- Passes data using XML or HTML-like attributes in the parent
                 this passes the property issue_id in the parent
                 We passed in different values for the id and title properties to
                 display two hard-coded rows of Issues. We added only two fields
                 of an Issue for the sake of brevity; we’ll add the other fields
                 later. Further, we passed the attribute style to the native HTML
                 element <td>-->
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.issue_title}</td>
            </tr>
        )
    }
}

class IssueFilter extends React.Component {
    render() {
        return(
            <div>This is a placeholder for the Issue Filter.</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding:6};
        return(
            <table style = {{borderCollapse:"collapse"}}>
                <thead>
                <tr>
                    <th style={borderedStyle}>Id</th>
                    <th style={borderedStyle}>Title</th>
                </tr>
                </thead>
                <tbody>
                    <!-- The issue title is passed in as a string using a quoted
                    attribute, whereas the numbers 1 and 2 are enclosed in curly
                    braces. We accessed the properties using this.props in the child
                    component as seen in the IssueRow component -->
                    <IssueRow issue_id={1}
                    issue_title="Error in console when clicking add"/>
                    <IssueRow issue_id={2}
                    issue_title="Missing bottom border on panel"/>
                </tbody>
            </table>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return(
            <div>This is a placeholder for an Issue Add entry form.</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return(
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr />
                <IssueTable/>
                <hr />
                <IssueAdd/>
            </div>
        );
    }
}

ReactDOM.render(<IssueList/>, contentNode);