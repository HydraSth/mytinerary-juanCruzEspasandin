import {React,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';

export default function Step2(){
    const dispatch= useDispatch()
    const login_reducer = useSelector((state)=>state.login_reducer.create_step)

    const handlePrevClick=()=>{
        dispatch(loginActions.modify_create_step(1))
    }    
    const handleNextClick=()=>{
        dispatch(loginActions.modify_create_step(login_reducer+1))
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
						/>
						<input
							type="text"
							autoComplete="off"
							className="w-5/12 border-b text-inverse-theme/75 text-sm border-primary pb-4"
							placeholder="Last Name"
						/>
						<h4 className="text-xs my-2 w-full text-inverse-theme/50">
							Date of birth
						</h4>
						<select
							className="w-5/12 border-b text-sm text-inverse-theme/75 border-primary pb-4"
							defaultValue=""
						>
							<option value="" disabled hidden>
								Month
							</option>
							<option value="01">January</option>
							<option value="02">February</option>
							<option value="03">March</option>
							<option value="04">April</option>
							<option value="05">May</option>
							<option value="06">June</option>
							<option value="07">July</option>
							<option value="08">August</option>
							<option value="09">September</option>
							<option value="10">October</option>
							<option value="11">November</option>
							<option value="12">December</option>
						</select>
						<select
							className="w-5/12 border-b text-sm text-inverse-theme/75 border-primary pb-4"
							defaultValue=""
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
						/>
						<section className="flex flex-row">
							<h4 className="text-xs my-2 text-inverse-theme/75">
								Country/Region
							</h4>
							<select className="text-sm text-primary ps-2 w-1/2">
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
						<input type="checkbox" className="me-2 text-primary" />
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
							onClick={() => console.log("Finalizo")}
							className="bg-primary text-white py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm"
						>
							Continue
						</button>
					</div>
			</section>
		</>
	)
}
