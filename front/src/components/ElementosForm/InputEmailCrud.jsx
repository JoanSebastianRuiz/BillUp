export const InputEmailCrud = ({onChange, id, name}) =>{
    return(
        <input className="min-w-72 max-w-96 bg-slate-100 text-slate-500 rounded-xl focus:outline-none px-2 py-2"
        type="email" onChange={onChange} id={id} name={name}/>
    );
}