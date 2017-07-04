import React, { Component } from 'react';
class Footer extends Component {

	currentYear() {
		let dateToday = new Date();
		let currentYear = dateToday.getFullYear();
		return currentYear;
	}


	render() {
		return (

			<footer class="page-footer">
				<div class="container">
					<div class="row">
						<div class="col s12 m6 center">
							<a href="http://www.franciscan.edu/" title="Franciscan University of Steubenville" target="_blank"><img class="responsive-img" src="img/vertical-fus-logo-white.svg" width="135px" /></a>
						</div>
						<div class="col s12 m6">
							<h5 class="white-text light">Contact</h5>
							<address>
								<p class="white-text" translate="no" typeof="schema:PostalAddress">
									<span property="schema:streetAddress">1235 University Boulevard</span>
										<span property="schema:addressLocality">Steubenville</span>, <abbr title="Ohio" property="schema:addressRegion">OH</abbr> <span property="schema:postalCode">43952</span> <abbr property="schema:addressCountry">USA</abbr><br />
										<a href="tel:+17402833771" property="telephone" class="white-text">740.283.3771</a><br />
										<a href="mailto:example@franciscan.edu" property="email" class="white-text">
											example@franciscan.edu</a>
            					</p>
          					</address>
        				</div>
						</div>
					</div>
					<div class="footer-copyright">
						<div class="container">
							© <span id="copyright-date">2016</span> Franciscan University of Steubenville
      					</div>
					</div>
 			 </footer>
			
									
									
									
									
				);
		}
	}

export default Footer;
