import React, { Component } from 'react'
import Logog from '../images/logog.png'

export default class Signin extends Component{
    

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
					        <input type="email" name="email" placeholder="Enter your Email" required />
					<input type="password" name="password" placeholder="Enter your password" required />
					<button type="submit">SIGN IN</button>
                    </div>
			</form>
		</div>
        </div>
        </div>
        )
    }
}