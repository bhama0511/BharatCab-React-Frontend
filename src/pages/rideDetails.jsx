import './rideDetils.css';

export default function RideDetailsPage() {
    
    return <div class="w-50 p-3 text-center mx-auto">

        <div><h1>Thu 8 Aug</h1></div>
        <br />

        <div>

            <h3>Cancelled</h3>
        </div>
        <hr></hr>
        <div class="d-flex justify-content-between">
            <div>
                <ul>
                    <li>Pay in Cash</li>
                    <li>1 Seat</li>
                </ul>
            </div>
            <div>
                <h4>₹390</h4>
            </div>
        </div>
        <hr />

        <div class="card">
            <div class="card-body ">
                <div class="d-flex align-items-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "100px"}}
                        alt="Avatar" />
                    <b class="m-4">Shubham G</b>
                </div>
                <i class="bi bi-arrow-right-short"></i>
            </div>
        </div>



        <div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Timeline</h6>
                    <div id="content">
                        <ul class="timeline">
                            <li class="event" data-date="12:30 - 1:00pm">
                                    <h3>
                                        pune
                                    </h3>
                                <p>bkl arya ka flat.</p>
                            </li>
                            <li class="event" data-date="2:30 - 4:00pm">
                                <h3>Navi Mumbai</h3>
                                <p>manish ka ghar</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
}