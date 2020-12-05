import AndhraBank from './AndhraBank.js';
import CorporationBank from './CorporationBank';


function UnionBank(){
	return <div>
	<h1>Union Bank is Parent component</h1>
	<AndhraBank bankname="AndhraBAnnk" location="Vijayawada"/>
	<CorporationBank bankname="CorporationBank" location="vizag"/>
	</div>



}



export default UnionBank;