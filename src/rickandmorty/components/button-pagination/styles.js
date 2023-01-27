import { css } from 'lit';


export default css`
.button{
    width: 45px;
    height: 45px;
    margin: 5px;
    border-radius: 8px;
    border: 1px solid #e3edd2;
    background: transparent;
    color: #e3edd2;
    cursor: pointer;
    transition: .3s
}

.special{
    background:#58afb8 !important;
    color:  #020305;
}

.selected{
    background:#fffcf7 !important;
    color:  #269199;
}


.button:hover{
    transform: scale(1.1)

}
.button:active{
    transform: scale(0.9)

}
`;