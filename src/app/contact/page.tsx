

function page() {
  return (
    <div>
      <div className="w-screen  flex flex-col justify-center items-center">
        <div className="text-4xl mt-[130px] " >Contact Us</div>
        <div className="m-6">
            <label className="block  mt-3 mb-2" htmlFor="email ">Email address</label>
            <input className="p-2 rounded-md bg-slate-900 sm:min-w-[400px]" type="email " id="email" placeholder="Enter your email" />

        </div>
        <div>
            <label className="block mt-5 mb-2 " htmlFor="textarea">Review</label>
            <textarea className="sm:min-w-[400px] w-[220px] p-2 text-slate-200 bg-slate-900"  name="" id="description"  cols={40} rows={10} placeholder="Write your thoughts">Write your thoughts</textarea>
        </div>
        <button className="bg-slate-400 text-black rounded-sm px-3 m-5 border ">Submit</button>
      </div>
    </div>
  )
}

export default page
