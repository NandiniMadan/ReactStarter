import React, { Component } from 'react';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list : [ 'Home','Top Clients','About us', 'Services','Sign Up','Sign In']
         };
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        Hello Nandu! !
                    </li>
                    <hr>
                    </hr>
                    <li>
                        Hello Honey! !
                    </li>
                </ul>

            </div>
        );
    }
}

export default NavBar;