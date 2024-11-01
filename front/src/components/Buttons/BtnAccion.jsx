export const BtnAccion = ({name, onClick}) =>{
    return(
        <button onClick={onClick} className="bg-slate-50 p-2 min-w-40 my-4 text-lg rounded-xl text-slate-600 w-1/12 border-4 border-slate-600 font-bold hover:bg-slate-800 hover:text-slate-50 transition-colors duration-100">{name}</button>
    );
}
