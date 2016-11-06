import React, { Component } from 'react';
import PeopleBar from './PeopleBar';
import './../css/PeopleContainer.css';

class PeopleContainer extends Component {
    constructor() {
        super();
        this.seiyuu = {
            Kobayashi_Aika: { jpname: '小林愛香', name:'Aika', surname:'Kobayashi', birthday: 'Sat Oct 23 1993 00:00:00 UTC+0900 (Japan Standard Time)' },
            Takatsuki_Kanako: { jpname: '高槻かなこ', name: 'Kanako', surname: 'Takatsuki', birthday: 'Sat Sep 25 1993 00:00:00 UTC+0900 (Japan Standard Time)' },
            Furihata_Ai: { jpname: '降幡愛', name: 'Ai', surname: 'Furihata', birthday: 'Sat Feb 19 1994 00:00:00 UTC+0900 (Japan Standard Time)' },
            Aida_Rikako: { jpname: '逢田梨香子', name: 'Rikako', surname: 'Aida', birthday: 'Sat Aug 8 1992 00:00:00 UTC+0900 (Japan Standard Time)' },
            Saitou_Shuka: { jpname: '斎藤朱夏', name: 'Shuka', surname: 'Saitou', birthday: 'Fri Aug 16 1996 00:00:00 UTC+0900 (Japan Standard Time)' },
            Inami_Anju: { jpname: '伊波杏樹', name: 'Anju', surname: 'Inami', birthday: 'Wed Feb 7 1996 00:00:00 UTC+0900 (Japan Standard Time)' },
            Suwa_Nanaka: { jpname: '諏訪ななか', name: 'Nanaka', surname: 'Suwa', birthday: 'Wed Nov 2 1994 00:00:00 UTC+0900 (Japan Standard Time)' },
            Komiya_Arisa: { jpname: '小宮有紗', name: 'Arisa', surname: 'Komiya', birthday: 'Sat Feb 5 1994 00:00:00 UTC+0900 (Japan Standard Time)' },
            Suzuki_Aina: { jpname: '鈴木愛奈', name: 'Aina', surname: 'Suzuki', birthday: 'Sun Jul 23 1995 00:00:00 UTC+0900 (Japan Standard Time)' }
        };
    }

    render() {
        return (
            <div className="PeopleContainer container">
                <PeopleBar person={this.seiyuu.Inami_Anju} />
                <PeopleBar person={this.seiyuu.Saitou_Shuka} />
                <PeopleBar person={this.seiyuu.Aida_Rikako} />
                <PeopleBar person={this.seiyuu.Kobayashi_Aika} />
                <PeopleBar person={this.seiyuu.Takatsuki_Kanako} />
                <PeopleBar person={this.seiyuu.Furihata_Ai} />
                <PeopleBar person={this.seiyuu.Komiya_Arisa} />
                <PeopleBar person={this.seiyuu.Suwa_Nanaka} />
                <PeopleBar person={this.seiyuu.Suzuki_Aina} />
            </div>
        );
    }
}

export default PeopleContainer;