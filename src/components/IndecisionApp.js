import React from 'react';

//components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleAddOptions = (option) => {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                        <div className="widget">
                            <Options 
                                options={this.state.options} 
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteOption={this.handleDeleteOption} />
                            <AddOption 
                                handleAddOptions={this.handleAddOptions} />
                            <OptionModal selectedOption={this.state.selectedOption} 
                                handleCloseModal={this.handleCloseModal} />
                        </div>
                </div>
            </div>
        );
    }
}