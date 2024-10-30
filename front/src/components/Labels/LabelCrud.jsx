export const LabelCrud = ({htmlFor,name, className=""}) =>{
    return(
        <label className={"text-2xl font-bold text-slate-50 "+className}
        htmlFor={htmlFor}>{name}</label>
    );
}