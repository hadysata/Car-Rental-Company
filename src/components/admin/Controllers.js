import * as Firestore from '../../services/api/firestore'
import { Link } from 'react-router-dom'

//Encode image file to base64 to upload it to firebase storage
export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

//To get href Parameters
export function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//Get car object by id
export async function getCar(id) {
    if (id && id.length > 3) {
        var result = await Firestore.getCar(id);
        if (result && result.status === "ok") {
            return result.result
        }

    }
    return undefined;

}


//To get orders components
export function getOrdersArray(orders){
   return orders?.length ? orders.map(order => {
        return (
            <div key={order.id} className="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top car-img" src={order.car.image} alt="Card cap"></img>
                    <div class="card-body" >
                        <h5 class="card-title text-center">
                            {order.car.name}
                        </h5>
                        <h5 class="card-title text-center">
                            From:{order.dateFrom}<br />
                                To:{order.dateTo}
                        </h5>
                        <h5 class="car-price mb-3 mt-3 text-center">
                            Total: {order.price}$
                        </h5>
                        <Link to={`/viewReservation?id=${order.id}`}>
                            <button className="btn float-right">
                                <span className="font-weight-bold">Manage Order</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }) : null
}