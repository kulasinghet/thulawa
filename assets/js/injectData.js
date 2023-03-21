console.log('injectData.js loaded');

import opinions from '../js/data/opinions.js';

const injectOpinions = () => {
	const opinionsContainer = document.getElementById('opinions');

	if (opinionsContainer !== null) {
	// 	< div
	// 	className = "col-lg-4 col-md-7" >
	// 		< div
	// 	className = "single_blog mt-30" >
	// 		< div
	// 	className = "blg_image" >
	// 		< img
	// 	src = "assets/images/blog-1.jpg"
	// 	alt = "blog" >
	// 		< /div>
	// 	<div className="blg_content">
	// 		<h4 className="blog_title"><a href="#">Lorem ipsum dolor sitcns etetursa pscing elitr sed diannumy.</a></h4>
	// 		<p>Lorem ipsum dolor sitcons etetursa pscing elitr, sed diannumy eirmod tempor iannum eirmod tempor
	// 			invidunt.</p>
	// 		<a href="#" className="more">Read More...</a>
	// 	</div>
	// </div> <!-- single blog -->
	// </div>
		const tempOpinions = opinions.slice(0, 3);
		tempOpinions.forEach(opinion => {
			const opinionDiv = document.createElement('div');
			opinionDiv.className = 'col-lg-4 col-md-7';
			opinionDiv.innerHTML = `
				<div class="single_blog mt-30">
					<div class="blg_image">
						<img src="assets/images/blog-1.jpg" alt="blog">
					</div>
					<div class="blg_content pt-10">
						<h4 className="blog_title"><a href="#">${opinion.title}</a></h4>
						<p>${opinion.description}</p>
						<a href="#" className="more">Read More...</a>
					</div>
				</div>
			`;
			opinionsContainer.appendChild(opinionDiv);
		});
	}
}

injectOpinions();
