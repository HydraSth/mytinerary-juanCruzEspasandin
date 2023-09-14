import {React,useEffect,useReducer,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';
import axios from 'axios';
import Swal from 'sweetalert2';
import userActions from '../../redux/actions/user_actions';

export default function Step2(){
    const dispatch= useDispatch()

    const handlePrevClick=()=>{
        dispatch(loginActions.modify_create_step(1))
    }    
	const handleFinish = () => {
      	let body_info = localStorage.getItem('user_register');
		axios.post('http://localhost:3000/api/auth/signUp', body_info, {
			headers: {
			  'Content-Type': 'application/json'
			}
		}).then(res => {
			Swal.fire({
				icon: 'success',
				title: 'Success!',
				html: 'Redirecting to signin',
				timer: 1500,
				timerProgressBar: true,
				didOpen: () => {
					Swal.showLoading()
				},
			}).then(() => {
				window.location.href = '/mytinerary-juanCruzEspasandin/l#/login'
			})	
		}).catch(err => {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `${err.response.data.message}`,
			})
		})
	};
	  	  
	let register_email=useSelector((state)=>state.register_reducer.email)
    let register_password=useSelector((state)=>state.register_reducer.password)
	const [user, setUser] = useState({
		name: "",
		lastName:"",
		email: register_email,
		password: register_password,
		month_birth:"",
		year_birth:"",
		photo:"",
		country:"Argentina",
		mail_contact:false	
	})
	
	useEffect(()=>{
		localStorage.setItem("user_register",JSON.stringify(user))		
	},[user])

	const handleChangeUser=(attrib,e)=>{
		switch(attrib){
			case "name":
				setUser({...user, name: e.target.value})
			break
			case "lastName":
				setUser({...user, lastName: e.target.value})
			break
			case "month_birth":
				setUser({...user, month_birth: e.target.value})
			break
			case "year_birth":
				setUser({...user, year_birth: e.target.value})
			break
			case "photo":
				setUser({...user, photo: e.target.value})
			break
			case "country":
				setUser({...user, country: e.target.value})
			break
			case "mail_contact":
				setUser({...user, mail_contact:e.target.checked})
			break
		}
	}



	return (
		<>
			<section className="w-2/3">
				<p className="text-sm text-inverse-theme/60">
					step 2 of 2
				</p>
				<h2 className="text-2xl font-bold mb-3">Create account</h2>
			</section>
			<section className="flex flex-col w-2/3">
					<h4 className="text-sm mb-4">
						Already have an account?
						<a className="text-primary"> Sign in</a>
					</h4>
					<form className="flex flex-wrap gap-x-2">
						<input
							type="text"
							autoComplete="off"
							className="w-5/12 border-b text-inverse-theme/75 text-sm border-primary pb-4"
							placeholder="First Name"
								onChange={(e)=>handleChangeUser("name",e)}
						/>
						<input
							type="text"
							autoComplete="off"
							className="w-5/12 border-b text-inverse-theme/75 text-sm border-primary pb-4"
							placeholder="Last Name"
												onChange={(e)=>handleChangeUser("lastName",e)}
						/>
						<h4 className="text-xs my-2 w-full text-inverse-theme/50">
							Date of birth
						</h4>
						<select
							className="w-5/12 border-b text-sm text-inverse-theme/75 border-primary pb-4"
							defaultValue=""
							onChange={(e)=>handleChangeUser("month_birth",e)}
							
						>
							<option value="" disabled hidden>
								Month
							</option>
							<option value="January">January</option>
							<option value="February">February</option>
							<option value="March">March</option>
							<option value="April">April</option>
							<option value="May">May</option>
							<option value="June">June</option>
							<option value="July">July</option>
							<option value="August">August</option>
							<option value="September">September</option>
							<option value="October">October</option>
							<option value="November">November</option>
							<option value="December">December</option>
						</select>
						<select
							className="w-5/12 border-b text-sm text-inverse-theme/75 border-primary pb-4"
							defaultValue=""
														onChange={(e)=>handleChangeUser("year_birth",e)}
						>
							<option value="" disabled hidden>
								Year
							</option>
							{Array.from({ length: 100 }, (_, index) => {
								const year = new Date().getFullYear() - index
								return (
									<option key={year} value={year}>
										{year}
									</option>
								)
							})}
						</select>
						<input
							type="text"
							autoComplete="off"
							className="my-4 w-5/6 border-b text-sm border-primary pb-4"
							placeholder="Photo"
							onChange={(e)=>handleChangeUser("photo",e)}
								/>
						<section className="flex flex-row">
							<h4 className="text-xs my-2 text-inverse-theme/75">
								Country/Region
							</h4>
							<select 
							className="text-sm text-primary ps-2 w-1/2"
							onChange={(e)=>handleChangeUser("country",e)}
							defaultValue={"Argentina"}
							>
								<option value="" disabled hidden>
									Select a country
								</option>
								<option value="Argentina">Argentina</option>
								<option value="Bolivia">Bolivia</option>
								<option value="Brazil">Brazil</option>
								<option value="Chile">Chile</option>
								<option value="Ecuador">Ecuador</option>
								<option value="El Salvador">El Salvador</option>
								<option value="Mexico">Mexico</option>
								<option value="Paraguay">Paraguay</option>
								<option value="Uruguay">Uruguay</option>
							</select>
						</section>
					</form>
					<h4 className="text-xs text-inverse-theme/75 mt-4 flex">
						<input type="checkbox"
						 onChange={(e)=>handleChangeUser("mail_contact",e)}
						 className="me-2 text-primary"
						/>
						Please contact me via email
					</h4>
					<h6 className="text-xs mt-2 text-inverse-theme/50">
						By clicking Create account, I agree that I have read and
						accepted the{" "}
						<a className="text-primary/75 underline" href="">
							Terms of Use
						</a>{" "}
						and{" "}
						<a className="text-primary/75 underline" href="">
							Privacy Policy
						</a>
						.
					</h6>
					<div className='flex h-12 place-content-between'>
						<button
							onClick={() => handlePrevClick()}
							className="border-primary border hover:bg-primary hover:text-theme transition-colors duration-300 text-primary py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm"
						>
							Previous
						</button>
						<button
							onClick={() => handleFinish()}
							className="bg-primary text-white py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm"
						>
							Continue
						</button>
					</div>
			</section>
		</>
	)
}
