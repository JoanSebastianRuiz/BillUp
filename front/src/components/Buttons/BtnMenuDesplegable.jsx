export const BtnMenuDesplegable = ({name, onClick}) =>{

    return (
        <button onClick={onClick} className="bg-slate-900 p-2 rounded-lg text-slate-50 hover:bg-slate-800 w-2/3">{name}</button>
    );
}