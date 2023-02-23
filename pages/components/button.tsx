
export const Button = (
    props:{title:string}
    ) =>{

       const{ title} = props;

    return(
        <>
            <button>{title}</button>
        </>
    );
}

//Typescriptで二つのPropsを渡す方法
// export const Button = (
//     props:{title:string,title2:string}
//     ) =>{

//        const{ title, title2 } = props;

//     return(
//         <>
//             <button>{title}</button>
//             <button>{title2}</button>
//         </>
//     );
// }