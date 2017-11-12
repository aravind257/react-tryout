import React,{Component} from "react";
export default class About extends Component{
    constructor(){
        super();
        //state is a keyword for mutable data
        this.state={
            members:["Member 1","Member 2","Member 3"],
            showList: true
        }
    }

    addMember(){
        console.log("add member");
        this.state.members.push("Member"+Math.random());
        //BAD
        //trigger render method
        //this.forceUpdate();
        this.setState({
            members: this.state.members
        })
    }
    showHide(){
        this.setState({
            showList: !this.state.showList
        })
    }
    getList(){
        return(
        <ul>{
            this.state.members.map((member,index) => 
                (<li key={index}>  {member} </li>
            ))
        }
        </ul>)

    }
    render(){
        return(
            <div className="container">
                <h2> React About </h2>
                <h2> React Members</h2>
                {this.state.showList && this.getList()
                    
                }
                <div>
                    <button onClick={()=>this.addMember()}>
                        Add
                    </button>
                    <button onClick={()=>this.showHide()}>
                        {this.state.showList?"Hide":"Show"}
                    </button>
                </div>
            </div>

        )
    }
}