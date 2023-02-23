import styled from 'styled-components'

export const Button = (
    props:{title:string}
    ) =>{

       const{ title} = props;

    return(
        <>
            <button className='bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2'>{title}</button>
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