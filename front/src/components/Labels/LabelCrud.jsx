export const LabelCrud = ({htmlFor,name}) =>{
    return(
        <label className="text-2xl font-bold text-slate-50"
        htmlFor={htmlFor}>{name}</label>
    );
}