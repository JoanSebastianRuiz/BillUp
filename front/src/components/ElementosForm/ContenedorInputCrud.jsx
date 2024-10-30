export const ContenedorInputCrud = ({children, className = ""}) =>{
    return (
        <div className={"flex flex-col gap-y-4 " + className}>
            {children}
        </div>
    );
}