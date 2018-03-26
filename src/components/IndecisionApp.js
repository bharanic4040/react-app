import React from 'react';


import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption:undefined
    };

    handleClearSelectedOption=()=>{
        this.setState(()=>{
            return {
                selectedOption : undefined
            };
        });
    }

    handleDeleteOptions=()=> {

        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption=(optionToRemove)=> {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            };
        });

    };

    handleAddOption= (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    };

    handlePick=() =>{

        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
       
        this.setState(()=>{
            return {
                selectedOption:option
            };
        });

    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => {
                    return {
                        options
                    };
                });

            }

        } catch (e) {
            console.log(e);
        }


    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    
    render() {

        const subtitle = "Put your life in hands of computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
                <Options
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
           <OptionModal  handleClearSelectedOption ={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
            </div>
        );
    }

}

IndecisionApp.defaultProps = {
    options: []
};
export default IndecisionApp;

