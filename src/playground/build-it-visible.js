class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);    
        this.title = "Visibility Toggle";
        this.subtitle = "Here is some awesome text to display";
        this.buttontitlehidden = "Show details";
        this.buttontitleshowing = "Hide details"   
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        } 
    }
     
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>       
                <button onClick={this.handleToggle}>{this.state.visibility ? this.buttontitleshowing : this.buttontitlehidden}</button>
                {this.state.visibility && (
                    <div>
                        <p>{this.subtitle}</p>   
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));