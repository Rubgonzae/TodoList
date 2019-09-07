import React, {Component} from 'react';
import Menu from '../Components/menu';
import './styles.css'; 
import ToDoList from './TODOLIST';
import Content from '../Components/content'

 
class Main extends Component {
    render () {
        return (
            <div>
                <div className="row Lado">
                    <div className="col-md-2">izquierda</div>
                    <div className="col-md-8">
                        <Menu />
                        <header className="text align-center">
                          <h3>  My Tasks in Apollo Enterprises </h3>
                          Lista  Calendar  Files
                        </header>
                        
                        <ToDoList />
                        <Content />
                        {/*<Tasks eventAddDev={ this.clicHandler.bind(this) } list={this.state.listTarea}  /> */}                      
                    </div>
                    <div className="col-md-2"></div>

               </div>
            </div>
        );
    }
}

export default Main;