import { css } from 'lit'


export default css`
        .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
    } 

    .wrapper-list{
        min-height: 100vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        flex-direction: column;
        padding:20
    }

    .character-list{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
    }

    .loaderWrapper{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height: 80vh;
    }


    .button {
    text-decoration: none;
    color: black;
    user-select: none;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 8px;
    background-color: #b59ee9;
    color: #fff;
    font-weight: bold;
    transition: .3s;
}

.button:hover {
    transform: scale(1.1);
}

.button:active {
    transform: scale(0.9);
}
    
    `