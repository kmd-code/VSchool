import React, { useContext, useState, useEffect } from 'react'
// import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from '../context/PostProvider'
import cameraDataFile from "./cameraDataFile.js"
import lensDataFile from "./lensDataFile.js"
import { Post } from "./Post"
export const PostSearch = () => {
const initInputs = {
    style: "",
    cameraBrand: "",
    cameraModel: "",
    lensBrand: "",
    lensModel: ""
}
const { posts, getAllPosts  } = useContext(PostProviderContext)
const [makesModelsCam, setMakesModelsCam] = useState({});
const [makesModelsLens, setMakesModelsLens] = useState({});
const [camModels, setCamModels] = useState([]);
const [lensModels, setLensModels] = useState([]);
const [selected, setSelected] = useState({});
// const history = useHistory();
// const { newPost } = useContext(PostProviderContext)
useEffect(() => {
    getAllPosts()
    setMakesModelsLens(lensDataFile);
    setMakesModelsCam(cameraDataFile)
    setSelected(initInputs)
}, []);
function handleSubmit(e, selected, style, cameraBrand, lensBrand){
    e.preventDefault()
        console.log("submit selected", selected)
}
function handleChange(e){
    const {name, value} = e.target
    setSelected(prevSelected => ({
        ...prevSelected,
        [name]: value
    }))
    console.log("handleChange", selected)
}
//* -------------   camera selection -------------   */
const selectMake = (e) => {
    const { name, value } = e.target;
    setCamModels(makesModelsCam[value]);
    setSelected((prevState) => {
        return { ...prevState, [name]: value };
    });
};
const handleModelSelect = (e) => {
    const { name, value } = e.target;
    setSelected((prevState) => {
        return { ...prevState, [name]: value };
    });
    console.log("selected model", selected);
};
const cameraBrandOptions =
    makesModelsCam &&
    Object.keys(makesModelsCam)
        .sort((a, b) => a.localeCompare(b))
            .map((camBrand, idx) => {
                return (
                    <option key={idx} value={camBrand}>
                        {camBrand}
                    </option>
                );
        });
const cameraOptions =
    camModels &&
    camModels
        .sort((a, b) => a.localeCompare(b))
        .map((camModel, idx) => {
            return (
                <option className='p-4' key={idx} value={camModel}>
                    {camModel}
                </option>
            );
        });
/* -------------    lens selection ~~~-------------    */
const selectLensMake = (e) => {
    const { name, value } = e.target;
    setLensModels(makesModelsLens[value]);
    setSelected((prevState) => {
        return { ...prevState, [name]: value };
    });
};
const handleLensModelSelect = (e) => {
    const { name, value } = e.target;
    setSelected((prevState) => {
        return { ...prevState, [name]: value };
    });
};
const lensBrandOptions =
makesModelsLens &&
Object.keys(makesModelsLens)
    .sort((a, b) => a.localeCompare(b))
        .map((lensBrand, idx) => {
            return (
                <option key={idx} value={lensBrand}>
                    {lensBrand}
                </option>
            );
    });
const lensOptions =
lensModels &&
lensModels
    .sort((a, b) => a.localeCompare(b))
    .map((lensModel, idx) => {
        return (
            <option className='p-4' key={idx} value={lensModel}>
                {lensModel}
            </option>
        );
    });
return (
    <div className="postsFeed">     
           <form onChange={ handleChange } className='flex flex-row space-x-4'>
			<h3>Select Photography Style</h3>
			<select name="style">
                    <option input="" disabled selected defaultValue>Style</option> 
                    <option input="all">All</option> 
                    <option value="Architectural">Architectural</option>
                    <option value="Astro">Astro</option> 
                    <option value="Car">Car</option>
                    <option input="Fashion">Fashion</option> 
                    <option value="Food">Food</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Macro">Macro</option> 
					<option value="Nature">Nature</option>
                    <option value="Night">Night</option>
                    <option value="Other">Other</option> 
                    <option value="Pet">Pet</option> 
                    <option value="Photojournalism">Photojournalism</option>
                    <option value="Product">Product</option>
                    <option value="Sports">Sports</option>
                    <option value="Still Life">Still Life</option>
                    <option value="Street">Street</option>
                    <option value="Travel">Travel</option>
                    <option value="Underwater">Underwater</option> 
                    <option value="Wedding">Wedding</option> 
                    <option value="Wildlife">Wildlife</option> 
                </select>
				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
			<h3>Search by Camera</h3>
				<select
					className='w-56 p-2'
					onChange={selectMake}
					name='cameraBrand'
					id='cameraBrand'>
					<option value='' disabled selected defaultValue >
						Select Brand
					</option>
					{cameraBrandOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleModelSelect}
					name='cameraModel'
					id='cameraModel'>
					<option value='Select Value' disabled selected defaultValue >
						Select Model
					</option>
					{cameraOptions}
				</select>
				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
				<h3>Search by Lens</h3>
				<select
					className='w-56 p-2'
					onChange={selectLensMake}
					name='lensBrand'
					id='lensBrand'>
					<option value='' disabled selected defaultValue >
						Select Brand
					</option>
					{lensBrandOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleLensModelSelect}
					name='lensModel'
					id='lensModel'>
					<option value='Select Value' disabled selected defaultValue >
						Select Model
					</option>
					{lensOptions}
				</select>
                <button onClick={handleSubmit}> 
                    Search
                </button>
			</form>
                { posts.map(post => <Post { ...post} key={post._id}/> ) }
                {/* { postsFilter.map(post => <Post { ...post} key={post._id}/> ) } */}
        </div>
    )
}