import { useForm} from "react-hook-form"
import axios from "axios";

function Contract() {
  const {register, handleSubmit, formState:{errors}} = useForm();

const onSubmit = (data) => {
  blogPost(data);


}

  const blogPost = (data) => {
  axios.post('http://localhost/kawsar/api/blog/addBlog.php', data).then(function(response){
        alert(response.data);
  })

}
  return (
    <div>
        <h1>Use form page</h1>

        <div className='container'>
        <h1>Pricing page</h1>

        <form  onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("title")} defaultValue=""  className='from-control' placeholder='Enter title'/> <br />

        <textarea name='details' {...register("details")} defaultValue="" className='from-control'></textarea> <br />
        <input type='submit' className='btn btn-primary'/>
        </form>
    
    </div>
  
    </div>
  )
}

export default Contract
