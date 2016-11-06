import React, { Component } from 'react';
import Timer from './Timer';
import './../css/PeopleBar.css';

class PeopleBar extends Component {
    render() {
        return (
            <div className={'CharBar-' + this.props.person.name + ' row disp-flex'}>
                <div className="col-md-2 col-sm-6 col-xs-12">
                    <img className="CharBar-Portrait center-block" src={'img/' + this.props.person.name + '.jpg'} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 CharBar-Name">
                    <span className="kanji-name">{this.props.person.jpname}</span>
                    <br />
                    <span className="romaji-name">{this.props.person.surname + ' ' + this.props.person.name}</span>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 CharBar-Timer">
                    <span className="kanji-name">{(new Date(this.props.person.birthday)).toLocaleDateString()}</span>
                    <br />
                    <span className="romaji-name"><Timer date={this.props.person.birthday} /></span>
                </div>    
            </div>
        );
    }
}

export default PeopleBar;