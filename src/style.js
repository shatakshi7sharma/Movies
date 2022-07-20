import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
        flex-direction: column;
        background: lightblue;
        height: 100vh;
        width: 100vw;

`;


export const MarginDiv = styled.div`
margin: 10rem;
`;


export const Card = styled.div`
 padding: 2rem ;

 display: flex;
 flex-direction: column;
 width: 100%;
        margin: 4px;
        background: white;
        color: black;
        font-size: 20px;
        max-height: 50vh;
        overflow: scroll;

        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
`;
export const CardAtTop = styled.div`
 padding: 2rem ;
 display: flex;
 flex-direction: column;
  /* width: 100%; */
        margin: 4px;
        background: white;

        border-radius: 0.3rem;
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
`;


export const SearchHeading = styled.div`


        display: flex;
        flex-direction: row;
        color: black;
        font-size: 20px;


        `;

export const BottomContainer = styled.div`
        display: flex;
        /* justify-content: space-between; */
        flex-direction: row;
        /* width: 100%; */
                    `;

export const Label1 = styled.button`
padding:0.1rem;
cursor:pointer;
margin-left: 6px;
background:  white;
      //  background: ${({ color }) => color ? "white" : "grey"};
        border: 2px solid grey;
        display: flex;
        height: 2rem;
        min-width: 3rem;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: ${({ color }) => color ? "black" : "grey"};

`;

//black

