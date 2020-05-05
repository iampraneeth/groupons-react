import React, { Component } from 'react'
import Logog from '../images/logog.png'

export default class Signup extends Component{
    

    render(){

        return(

            <div id="vertical-flip" class="card">
	            <div class="flip">
		            <div class="front">
			            <div class="logo" color="red">
						<img src={Logog} alt="Netlflix"/>
			            </div>
		            </div>

		            <div class="back">
			            <form>
				        <div class="box-input">
                             <input type="text" name="text" placeholder="Enter your Name" required />
                             <input type="tel" name="number" placeholder="Enter your Mobile number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
					        <input type="email" name="email" placeholder="Enter your Email" required />
					        <input type="password" name="password" placeholder="Set your password" required />
                            <input type="password" name="password" placeholder="Confirm your password" required />
					        <button type="submit">SIGNUP</button>
                    </div>
			</form>
		</div>
        </div>
        </div>
        )
    }
}