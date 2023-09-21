import React from 'react';
type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


export interface RoutingButtonProps{
    href:string;
    children:React.ReactNode;
    props?:any;
}