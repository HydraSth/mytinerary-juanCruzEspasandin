import axios from 'axios';
import Swal from 'sweetalert2';

const PostBody= (url,user_obj)=>{
    axios.post(`${url}`, user_obj, {
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            html: 'Redirecting to home',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        }).then(() => {
            const localState={
                logged:true,
            }
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('reduxState', JSON.stringify(localState));
            window.location.href = '/'
        })	
    }).catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`,
        })
    })
}

export {PostBody};