import { UserCard } from "./UserCard";

export const ListaUsuarios = ({usuarios})=>{
    return(
        usuarios.map(({_id_usua, _nombre_usua, _apellido_usua, _nombre_rol, _estado_usua, _numero_documento_usua})=>{
            return(
                <UserCard
                key={_id_usua}
                nombre_usua={_nombre_usua} 
                apellido_usua={_apellido_usua}
                nombre_rol={_nombre_rol}
                estado_usua={_estado_usua? "Activo":"Inactivo"}
                numero_documento_usua={_numero_documento_usua}></UserCard>
            );
        })
    );
}