export const BtnAccion = ({name, onClick}) =>{
    return(
        <button onClick={onClick} className="bg-slate-900 p-2 min-w-40 text-xl rounded-xl text-slate-50 hover:bg-slate-800 w-1/12 mb-4">{name}</button>
    );
}