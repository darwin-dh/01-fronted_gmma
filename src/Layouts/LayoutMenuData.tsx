import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
interface IMenu {
    label: string,
    isHeader: boolean

}
const Navdata = () => {
    // const history = useNavigate();





    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "Administracion",
            label: "Inicio",
            subItems: [
                {
                    id: "company",
                    label: "Empresa",
                    link: "/Empresa",
                    parentId: "dashboard",
                },
                {
                    id: "sucursal",
                    label: "Sucursal",
                    link: "/sucursales",
                    parentId: "dashboard",
                },
                {
                    id: "Categorias",
                    label: "Categorias",
                    link: "/Categorias",
                    parentId: "dashboard",
                },
                {
                    id: "Sub-Categorias",
                    label: "Sub-Categorias",
                    link: "/Sub-Categorias",
                    parentId: "dashboard",
                },

                {
                    id: "clientes",
                    label: "Clientes",
                    link: "/clientes",
                    parentId: "dashboard",
                },

                {
                    id: "nivelesAcceso",
                    label: "Niveles de acceso",
                    link: "/nivel-acceso",
                    parentId: "dashboard",
                },
                {
                    id: "printers",
                    label: "Impresoras",
                    link: "/printers",
                    parentId: "dashboard",
                }
            ]
        },

    ]
    return <React.Fragment>{menuItems}</React.Fragment>
};
export default Navdata;