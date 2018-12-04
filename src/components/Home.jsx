import React from "react";
import axios from 'axios';

class Home extends React.Component {

	render(){		
		return(
			<div>
				{this.props.posts.map(post =>
					<div id={post.key} className="col-xs-12 col-sm-4">
						<div className="thumbnail">
							<img src={post.url} alt="Unsplash Image" width="auto" height="auto"></img>
							<div className="caption"><p>{post.desc}</p></div>
						</div>
					</div>
				)}
			</div>
		);
	}

}

export default Home;
