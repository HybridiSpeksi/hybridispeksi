import React, { Component } from 'react'

import styles from './Speksi.css'

class Speksi extends Component {
	componentDidMount() {

	}
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className={"row align-items-end " + styles.content}>
            	    <div className={"col"}>
                		<img className={styles.mainimage} src=""></img>
                	</div>
            		<div className={"col " + styles.desc}>
                		<h1>Mikä ihmeen Speksi?</h1>
                		<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a iaculis risus. 
                		In hac habitasse platea dictumst. Suspendisse at gravida tellus. 
                		Nullam posuere lacinia ligula, quis imperdiet dolor ultrices in. 
                		Maecenas orci lacus, semper vitae nisi ac, pretium mattis ligula. 
                		Ut dictum nisi at sapien laoreet vestibulum. Mauris placerat vel lacus ultrices fringilla. 
                		Donec ut enim aliquam, accumsan ligula in, convallis purus. In tristique erat nec egestas facilisis. 
                		Suspendisse potenti. Morbi metus odio, pellentesque sed leo id, posuere venenatis libero. 
                		Fusce tempor rhoncus tellus. Aliquam eu libero non nulla pellentesque dictum eu non lacus.</p>
						<p>Proin vestibulum odio magna, sed lobortis nisl elementum a. 
						Integer sollicitudin metus pellentesque, ultricies eros id, suscipit odio. 
						Duis tincidunt et mauris a rhoncus. Donec fermentum ultrices metus sed sollicitudin. 
						Aenean cursus ante eu tortor luctus viverra. Vestibulum suscipit vitae eros id scelerisque. 
						Morbi aliquet, lacus id porttitor pretium, erat est sodales metus, efficitur pulvinar nisl risus quis enim. 
						Aenean ex urna, rutrum in iaculis sed, mollis sit amet leo. Phasellus at tortor quam. 
						Nunc luctus lorem sit amet arcu egestas eleifend. 
						Mauris ultrices felis iaculis, vehicula elit ut, consectetur libero.</p>
                	</div>
                </div>
            </div>
        )
    }
}
export default Speksi