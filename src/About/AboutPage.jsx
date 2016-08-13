export class AboutPage extends React.Component {
  
  constructor(props){
    super(props);
    this.changName = this.changName.bind(this);
  }
  
  changName(){
    browserHistory.push(`/about/${this.input.value}`);
  }
  
  render() {
    return (
      <div>
        <div>
          hi, I am {this.props.params.name}
        </div>
        <input type = "text" ref = {(input) => this.input = input}  />
        <button>Submit</button>
      </div>
    )
  }
}
