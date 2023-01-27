import { css } from 'lit';


export default css`
* {
    margin: 0;
    padding: 0;

}
::-webkit-scrollbar {
    width: 2px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #FEDEFF;
  }
  
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }


.modal {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    z-index: 100000000;
}

.horizontal {
    width: 100%;
    height: 20%;
    display: block;
    background-color: black;
    opacity: .6;
}

.wrapper {
    width: 100%;
    height: 80%;
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vertical {
    width: 20%;
    height: 100%;
    display: block;
    background-color: black;
    opacity: .6;
}

.content {
    background: #93C6E7;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}

.close-button {
    font-weight: bold;
    position: relative;
    right: 10px;
    user-select: none;
    transition: .3s;
    cursor: pointer;
}

.close-button:hover {
    transform: scale(1.1);
}

.close-button:active {
    transform: scale(0.9);
}

.wrapper-content {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.poke-description {
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    height: 88%;
    background-color: #FFF;
    padding: 0px 20px;
    overflow-y: scroll;
    border-radius: 10px;
}

.poke-description .detail {
    display: flex;
    margin:7px;
    width: 80%;
    height:20px
}


.poke-description .detail h3 {
    text-transform:capitalize;
    margin-right:7px;
    width: 80px

}
.resalted{
    font-weight: bold;
}
.poke-abilities{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.poke-info-wrapper {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
}

.poke-info-wrapper>img {
    min-width: 200px;
    border-radius: 9px;
}

.detail-episodes{
    width:100%;
    padding:20px;
    margin-top:10px;
    text-align: center;
    align-items: flex-start;
}

.detail-episodes .episode{
    width:100%;
    padding:10px;
    border-radius: 8px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    background:#8dbdeb;
    color: white;
    text-align: left;
}

@media screen and (max-width: 900px) {
    .poke-description {
        width: 100%;
    }
}

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 2px solid #FF3D00;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    top: 4px;
    border: 2px solid #FFF;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;