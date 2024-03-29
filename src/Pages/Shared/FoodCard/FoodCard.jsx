import React, { useContext } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosSecure } from '../../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext);;
    const {image, name, recipe, category, price , _id} = item;

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item)=> {
      console.log('Clicked', user)
      if(user && user.email){
        // TODO:  Sent food info to database
        const cartItem = {
          foodId : _id,
          email: user?.email,
          image,
          price,
          name
        };
        console.log(item)
        axiosSecure.post('/carts', cartItem)
        .then(res=> {
          console.log(res.data);
          if(res.data.insertedId){
            swal({
              position: 'top-center',
              icon: 'success',
              title: 'Package Booked Successfully',
              showConfirmButton: false,
              showCancelButton: false,
              timer: 2000
          });
          // refetch the bookings
          // refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Login!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state:location.pathname});
          }
        });
      }
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-4 top-4 bg-slate-800 text-white px-2'>{price} $</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions justify-end">
      <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-0 border-b-2">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;