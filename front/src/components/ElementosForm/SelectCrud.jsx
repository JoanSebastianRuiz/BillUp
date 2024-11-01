export const SelectCrud = ({name, id, onChange, children}) =>{
    return (
        <select className="min-w-72 max-w-96 bg-slate-100 text-slate-500 rounded-xl focus:outline-none px-2 py-2"
        name={name} id={id} onChange={onChange}>
            <option value="" disabled>Seleccionar</option>
            {children}
        </select>
    );
}