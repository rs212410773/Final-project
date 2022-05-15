import '../styles/managment.css'
export default function Managment () 
 {
    return (
        <div>
           
            <hr></hr>
            <div class="container"><h2>Example tab 2 (using standard nav-tabs)</h2></div>

            <div id="exTab2" class="container">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#1" data-toggle="tab">Overview</a>
                    </li>
                    <li>
                        <a href="#2" data-toggle="tab">Without clearfix</a>
                    </li>
                    <li>
                        <a href="#3" data-toggle="tab">Solution</a>
                    </li>
                </ul>

                <div class="tab-content ">
                    <div class="tab-pane active" id="1">
                        <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
                    </div>
                    <div class="tab-pane" id="2">
                        <h3>Notice the gap between the content and tab after applying a background color</h3>
                    </div>
                    <div class="tab-pane" id="3">
                        <h3>add clearfix to tab-content (see the css)</h3>
                    </div>
                </div>
            </div>

            <hr></hr>

            


            {/* <!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster --> */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        </div>
    )
}