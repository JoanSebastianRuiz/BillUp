

export const ListaCard = ({children})=>{
    return(
        <ul className="px-10 my-10 flex flex-wrap gap-x-4 gap-y-6 place-content-center">
            {children}
        </ul>

    );
}